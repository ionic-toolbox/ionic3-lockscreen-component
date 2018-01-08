import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the LockScreenComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'lock-screen',
  templateUrl: 'lock-screen.html'
})
export class LockScreenComponent {

  @Input('size') size;

  @Output() passCodeTyped = new EventEmitter();

  passCode: string;
  buttons: Array<any>;

  constructor() {
    this.passCode = '';
  }

  ngAfterViewInit() {
    
  }

  type(button: string, type){
    switch(type){
      case 'digit':
        if(this.passCode.length < this.size) this.passCode += button;
        break;
      case 'backspace':
        if(this.passCode.length > 0) this.passCode = this.passCode.substr(0, this.passCode.length - 1);
        break;
      case 'clear':
        this.passCode = '';
        break;
    }

    if(this.passCode.length == this.size){
      this.passCodeTyped.emit(this.passCode);
    }
  }

}
