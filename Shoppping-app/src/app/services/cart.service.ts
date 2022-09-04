import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Cart } from '../interfaces/cart.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {

  // private REST_API_SERVER = '/api/Cart';
  private REST_API_SERVER = '/api/Cart';

  constructor(private http: HttpClient) {}

  get_items(): Observable<Cart[]> {
    return this.http.get<Cart[]>(this.REST_API_SERVER)
  }

  add_item(data: any): Observable<any> {
    return this.http.post<Cart[]>(this.REST_API_SERVER, data)
  }

  deleteAll(): Observable<Cart[]> {
    return this.http.delete<Cart[]>(`${this.REST_API_SERVER + '/delete'}`)
  }

  delete_item(id: any): Observable<Cart[]> {
    return this.http.delete<Cart[]>(`${this.REST_API_SERVER}/${id}`)
  }
}
