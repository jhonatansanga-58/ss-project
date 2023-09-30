import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsersService } from '../services/users/users.service';
import { LoginUserDto } from '../dto/user.dto';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  show: boolean;
  password: string;
  isValid: boolean;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private usersService: UsersService,
    private authService: AuthService
  ) {
    this.show = false;
    this.password = 'password';
    this.isValid = false;
    this.buildForm();
  }

  private buildForm() {
    this.loginForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  public onSubmit() {
    const loginMessage = 'Logged in!';
    this.usersService.logInUser(this.buildUserPayload()).subscribe({
      next: (res: User) => {
        this.authService.login(res);
        this.snackBar.open(loginMessage, 'OK', {
          duration: 5000,
        });
        this.router.navigate(['/'])
          .then(() => {
            window.location.reload();
          });
      },
      error: (res) => {
        this.snackBar.open(res.error.message, 'OK', { duration: 5000 });
      }
    });
  }

  showPassword() {
    this.show = true;
    this.password = 'text'
  }

  hidePassword() {
    this.show = false;
    this.password = 'password'
  }

  private buildUserPayload(): LoginUserDto {
    let user = new LoginUserDto();
    user.name = this.loginForm.get('name').value;
    user.password = this.loginForm.get('password').value;
    return user;
  }
}
