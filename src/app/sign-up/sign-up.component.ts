import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  show: boolean;
  password: string;

  constructor() {
    this.show = false;
    this.password = 'password'
  }

  showPassword() {
    this.show = true;
    this.password = 'text'
  }

  hidePassword() {
    this.show = false;
    this.password = 'password'
  }
}
