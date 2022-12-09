import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDoSomething]',
  exportAs: 'doSmth'
})
export class DoSomethingDirective {
  constructor(private element: ElementRef) {}

  ngAfterViewInit() {
    this.changeColor();
  }

  public changeColor() {
    this.element.nativeElement.style.color = this.getRandomColor();
  }

  private getRandomColor() {
    return `hsla(${Math.random() * 360}, 100%, 50%, 1)`;
  }
}
