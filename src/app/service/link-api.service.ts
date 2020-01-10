import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinkAPIService {
  public link = 'http://localhost:3000/user';
  constructor() { }
}
