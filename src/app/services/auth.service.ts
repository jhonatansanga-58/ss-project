import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn: BehaviorSubject<boolean>;

  constructor(
    private router: Router) {
    this.isLoggedIn = new BehaviorSubject<boolean>(false);
  }

  isAuthenticated$(): Observable<boolean> {
    return this.isLoggedIn;
  }

  public login(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('role', user.role.toString());
    this.isLoggedIn.next(true);
    return user;
  }

  public get userValue(): User {
    return (JSON.parse(localStorage.getItem('user')));
  }

  public get roleValue() {
    return (localStorage.getItem('role'));
  }

  public logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('role');

    this.isLoggedIn.next(false);
    this.router.navigate(['/login'])
      .then(() => {
        window.location.reload();
      });
  }
}