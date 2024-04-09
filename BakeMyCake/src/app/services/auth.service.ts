import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  isLoggedIn: boolean = false;

  login(loginCode: string) {
    this.isLoggedIn = loginCode === '123456';
  }

  logout() {
    this.isLoggedIn = false;
  }
}
