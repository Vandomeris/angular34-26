import { Directive, ElementRef, HostBinding, HostListener, inject, Input } from '@angular/core';

@Directive({
  selector: '[appConsoler]',
})
export class Consoler {
  private element = inject<ElementRef<HTMLParagraphElement>>(ElementRef);

  @HostListener('click') onClick() {
    console.log(this.element.nativeElement.innerHTML);
  }

  @HostBinding('style.color') @Input({ required: true }) color!: string;
}
