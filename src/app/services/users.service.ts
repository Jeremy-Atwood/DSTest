import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../models/users';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url: string = `https://jsonplaceholder.typicode.com/`;

  constructor(
    private http: HttpClient
  ) { }

  public getUsersList(): Observable<Users> {
    const url = this.url + "users";
    const response = this.http.get<Users>(url);
    return response;
  }

  public getUserById(id): Observable<User> {
    const url = this.url + `users/${ id }`;
    const response = this.http.get<User>(url);
    return response;
  }

}
