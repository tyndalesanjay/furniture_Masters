import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInterface } from '../interfaces/user';
import { map, Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private REST_API_SERVER = '/api/items_list';
  // private REST_API_SERVER = 'http://localhost:5000/api/users';

  constructor(private httpClient: HttpClient) { }

  getAllUsers():Observable<UserInterface[]> {
    return this.httpClient.get<UserInterface[]>(this.REST_API_SERVER)
  }

  getUserById(id: number):Observable<UserInterface[]> {
    const url = `${this.REST_API_SERVER}/${id}`
    return this.httpClient.get<UserInterface[]>(url);
  }

  updateUser(id: any, data: any): Observable<any> {
    return this.httpClient.put<UserInterface[]>(`${this.REST_API_SERVER}/${id}`, data);
  }

  deleteUser(id: any): Observable<UserInterface[]> {
    return this.httpClient.delete<UserInterface[]>(`${this.REST_API_SERVER}/${id}`);
  }

}
