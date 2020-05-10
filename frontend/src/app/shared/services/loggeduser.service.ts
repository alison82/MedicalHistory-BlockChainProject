import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})

export class LoggeduserService {

  private isUserLoggedIn: boolean;
  public userLogged: User;

  constructor() {
    this.isUserLoggedIn = false;
  }

  setUserLoggedIn(user: User){
    this.isUserLoggedIn = true;
    this.userLogged = user;
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  getUserLoggedIn() {
    return JSON.parse(localStorage.getItem('currentUser'));
  }
  setUserLoggedOut(){
    this.isUserLoggedIn = false;
    localStorage.removeItem('currentUser');
  }
}
