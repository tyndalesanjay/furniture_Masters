import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Message } from '../interfaces/message.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private REST_API_SERVER = 'https://furniture-masters.vercel.app/api/messages'
  // private REST_API_SERVER = 'http://localhost:5000/api/messages'

  constructor(private http: HttpClient) { }

  getAll(): Observable<Message[]> {
    return this.http.get<Message[]>(this.REST_API_SERVER)
  }

  getById(id: string): Observable<Message[]> {
    return this.http.get<Message[]>(`${this.REST_API_SERVER}/${id}`)
  }

  sendMessage(messageInfo: any): Observable<Message[]> {
    return this.http.post<Message[]>(this.REST_API_SERVER, messageInfo)
  }

  updateMessage(id: string, messageUpdate: any): Observable<Message[]> {
    return this.http.put<Message[]>(`${this.REST_API_SERVER}/${id}`, messageUpdate)
  }

  deleteMessage(id: string): Observable<Message[]> {
    return this.http.delete<Message[]>(`${this.REST_API_SERVER}/${id}`)
  }
}

