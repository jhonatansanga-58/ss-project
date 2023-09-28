import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
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
