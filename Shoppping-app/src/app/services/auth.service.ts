import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as moment from 'moment';

const jwt = new JwtHelperService();

class DecodedToken {
  exp!: number;
  username!: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getToken() {
    throw new Error('Method not implemented.');
  }

  // private REST_API_SERVER = '/api/login';
  private REST_API_SERVER = 'http://localhost:5000/api/login';
  private decodedToken;

  constructor(private http: HttpClient) {
    this.decodedToken = JSON.parse(localStorage.getItem('auth_meta')!)
   }

   // Registers a new user.
  public register(userData: any): Observable<any> {
    const URI = this.REST_API_SERVER + '/register';
    return this.http.post(URI, userData);
  }

  // Authenticate a user.
  public login(userData: any): Observable<any> {
    const URI = this.REST_API_SERVER + '/login';
    return this.http.post(URI, userData).pipe(map(token => {
      return this.saveToken(token);
    }));
  }

  // Saves a token to local storage.
  private saveToken(token: any): any {
    this.decodedToken = jwt.decodeToken(token);
    localStorage.setItem('auth_tkn', token);
    localStorage.setItem('auth_meta', JSON.stringify(this.decodedToken));
    return token;
  }

  // Logout from the server.
  public logout(): void {
    localStorage.removeItem('auth_tkn');
    localStorage.removeItem('auth_meta');

    this.decodedToken = new DecodedToken();
  }

  // Checks if the current token is authenticated.
  public isAuthenticated(): boolean {
    return moment().isBefore(moment.unix(this.decodedToken.exp));
  }

  // Returns the username.
  public getUsername(): string {
    return this.decodedToken.username;
  }
}
