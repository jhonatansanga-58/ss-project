import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginUserDto } from 'src/app/dto/user.dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient
  ) { }

  public logInUser(payload: LoginUserDto) {
    return this.http.post(`${environment.apiUrl}/user/login`, payload);
  }
}
