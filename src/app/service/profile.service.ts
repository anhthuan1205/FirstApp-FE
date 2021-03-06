import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IProfile} from '../interface/i-profile';
import {JwtResponse} from '../interface/JwtResponse';
import {LinkAPIService} from './link-api.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(private http: HttpClient,
              private url: LinkAPIService) {
  }

  getAllUser(): Observable<IProfile> {
    return this.http.get<IProfile>(`${this.url.link}`);
  }

  getOneAcc(id: number): Observable<IProfile> {
    return this.http.get<IProfile>(`${this.url.link}/${id}`);
  }

  updateAcc(user: Partial<IProfile>): Observable<JwtResponse> {
    const r = confirm('Ban chac chan muon cap nhat?\n Chon OK hoac Cancel!');
    if (r) {
      return this.http.put<JwtResponse>(`${this.url.link}/profile/edit`, user);
    }
  }

    getOneAccToken(): Observable<IProfile> {
    return this.http.get<IProfile>(`${this.url.link}/profile`);
  }
}
