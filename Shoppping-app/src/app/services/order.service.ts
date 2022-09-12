import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../interfaces/order.interface';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private REST_API_SERVER = '/api/order'
  // private REST_API_SERVER = 'http://localhost:5000/api/order'

  constructor(private http: HttpClient) { }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.REST_API_SERVER);
  }

  createOrder(data: any): Observable<any> {
    return this.http.post(this.REST_API_SERVER, data)
  }

  getItemsById(id: number):Observable<Order[]> {
    const url = `${this.REST_API_SERVER}/${id}`
    return this.http.get<Order[]>(url);
  }

  updateItem(id: any, data: any): Observable<any> {
    return this.http.put<Order[]>(`${this.REST_API_SERVER}/${id}`, data);
  }

  deleteItem(id: any): Observable<Order[]> {
    return this.http.delete<Order[]>(`${this.REST_API_SERVER}/${id}`)
  }

}
