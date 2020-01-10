import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {JwtResponse} from '../interface/JwtResponse';
import {IRegister} from '../interface/i-register';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

class SignUpInfo {
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API_URL = 'http://localhost:3000/user';
  private loginUrl = 'http://localhost:3000/user/login';

  constructor(private http: HttpClient) {
  }
  attemptAuth(credentials: IRegister): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }
}
