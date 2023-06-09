import { Component,OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';


export class BaseComponent {

constructor(private spinner: NgxSpinnerService) {}
showSpinner(spinnernameType: SpinnerType){
this.spinner.show(spinnernameType);
setTimeout(() =>this.hideSpinner(spinnernameType), 3000);
}
hideSpinner(spinnernameType:SpinnerType){
  this.spinner.hide(spinnernameType);
}
}

export enum SpinnerType {
BallAtom = "s1",
BallScaleMultiple = "s2",
BallSpinClockwiseFadeRotating ="s3"

}
