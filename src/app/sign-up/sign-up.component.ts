import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UsersService } from '../services/users/users.service';
import { CreateUserDto } from '../dto/user.dto';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  show: boolean;
  passwordType: string;
  isValid: boolean;
  signupForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private usersService: UsersService) {
    this.show = false;
    this.passwordType = 'password';
    this.isValid = false;
    this.buildForm();
  }

  private buildForm() {
    this.signupForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      birthday: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      repPassword: new FormControl('', Validators.required),
    });
  }

  public onSubmit() {
    const loginMessage = 'User registered!';
    const passwordMatch = 'Passwords must match';

    if (this.signupForm.get('password').value !== this.signupForm.get('repPassword').value) {
      this.snackBar.open(passwordMatch, 'OK', {
        duration: 5000,
      });
      return;
    }
    this.usersService.createUser(this.buildUserPayload()).subscribe({
      next: () => {
        this.snackBar.open(loginMessage, 'OK', {
          duration: 5000,
        });
        this.router.navigate(['/login'])
          .then(() => {
            window.location.reload();
          });
      },
      error: (res) => {
        this.snackBar.open(res.error.message, 'OK', { duration: 5000 });
      }
    });
  }

  private buildUserPayload(): CreateUserDto {
    const birthday = new Date(this.signupForm.get('birthday').value);
    console.log(birthday.getDate());
    let user = new CreateUserDto();
    user.name = this.signupForm.get('name').value;
    user.email = this.signupForm.get('email').value;
    user.birthday = this.formatDate(birthday);
    user.password = this.signupForm.get('password').value;
    return user;
  }

  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const yearStr = year.toString();
    const monthStr = month < 10 ? '0' + month.toString() : month.toString();
    const dayStr = day < 10 ? '0' + day.toString() : day.toString();

    return yearStr + '-' + monthStr + '-' + dayStr;
  }

  showPassword() {
    this.show = true;
    this.passwordType = 'text'
  }

  hidePassword() {
    this.show = false;
    this.passwordType = 'password'
  }
}
