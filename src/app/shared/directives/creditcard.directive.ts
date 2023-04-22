import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCreditcard]'
})
export class CreditcardDirective {

  constructor() { }
   @HostBinding('style.border') border!:string;
  @HostListener('keyup',['$event'])
  onInputHandler(eve:Event){
    let inputControl=eve.target as HTMLInputElement
    let inputVal=inputControl.value.replace(/\s+/g, '')



    if(inputVal.length > 16){
      inputVal=inputVal.substring(0,16)
    }
    let numbers: Array<string>=[];
     for(let i=0;i<inputVal.length;i+=4){
                numbers.push(inputVal.substring(i,i+4))
     }
     inputControl.value=numbers.join(" ");



     if(/[^\d]/.test(inputVal)){
       this.border="2px solid red";
       inputControl.nextElementSibling?.classList.remove('d-none')
     }else{
      inputControl.nextElementSibling?.classList.add('d-none');
      this.border='';
     }
  }










}
