import {
  Component,
  QueryList,
  VERSION,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { DoSomethingDirective } from './shared/directives/do-something.directive';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  @ViewChildren('a') private doSomething: QueryList<DoSomethingDirective>;

  onChangeColor() {
    this.doSomething.last.changeColor();
  }
}
