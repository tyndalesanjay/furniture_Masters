import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Message } from '../interfaces/message.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseUrl = 'http://localhost:5000/api/messages'

  constructor(private http: HttpClient) { }

  getAll(): Observable<Message[]> {
    return this.http.get<Message[]>(this.baseUrl)
  }

  getById(id: string): Observable<Message[]> {
    return this.http.get<Message[]>(`${this.baseUrl}/${id}`)
  }

  sendMessage(messageInfo: any): Observable<Message[]> {
    return this.http.post<Message[]>(this.baseUrl, messageInfo)
  }

  updateMessage(id: string, messageUpdate: any): Observable<Message[]> {
    return this.http.put<Message[]>(`${this.baseUrl}/${id}`, messageUpdate)
  }

  deleteMessage(id: string): Observable<Message[]> {
    return this.http.delete<Message[]>(`${this.baseUrl}/${id}`)
  }
}

