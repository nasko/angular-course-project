import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') stateOpen = false;

  @HostListener('click') click(eventData: Event) {
    this.stateOpen = !this.stateOpen;
  }
}
