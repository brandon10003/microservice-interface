import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/api/v1/users/';

  constructor(private http:HttpClient) { }

  getUserList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  createUser(user: object): Observable<object> {
    return this.http.post(`${this.baseUrl}`, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getUser(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updateUser(id: number, value: any): Observable<Object> {
    return this.http.post(`${this.baseUrl}/${id}`, value);
  }
}
