import { Directive, ElementRef, HostListener, inject, input, signal } from '@angular/core';

@Directive({
  selector: '[appTooltip]',
})
export class Tooltip {
  private el = inject(ElementRef);

  toolTipText = input.required<string>();

  private tooltipElement = signal<HTMLDivElement | null>(null);

  @HostListener('mouseenter') showTooltip() {
    this.tooltipElement.set(document.createElement('div'));

    this.tooltipElement.update((item) => {
      item!.textContent = this.toolTipText();
      item!.style.cssText = 'position: absolute; background: blue';

      const rect = this.el.nativeElement.getBoundingClientRect();

      item!.style.top = rect.top - this.el.nativeElement.offsetHeight + window.pageYOffset + 'px';
      item!.style.left = rect.left + 'px';

      return item;
    });

    document.body.appendChild(this.tooltipElement()!);
  }

  @HostListener('mouseleave') hideTooltip() {
    const element = this.tooltipElement();
    if (element) {
      element.remove();
    }
  }
}
