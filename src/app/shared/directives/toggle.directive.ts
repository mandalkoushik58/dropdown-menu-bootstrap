import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appToggle]'
})
export class ToggleDirective {

  constructor() { }
@HostListener('click',['$event'])
onClickhandler(eve:Event){
  console.log("clicked");
  let dropmenu=eve.target as HTMLElement;
  console.log(dropmenu);
  dropmenu.nextElementSibling?.classList.toggle('show')
}
}
