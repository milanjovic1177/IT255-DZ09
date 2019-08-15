import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersMap = new Map();

  constructor() { }
  
  insertUser(email: string, password: string): boolean {
    console.log(this.usersMap);
    if(this.usersMap.has(email)) {
        return false;
    } else {
        this.usersMap.set(email, password);
    }
    return true
  }
  
  areCredentialsOk(email: string, password: string): boolean {
    console.log(this.usersMap);
    if(this.usersMap.has(email) && this.usersMap.get(email) == password) {
        return true;
    }
    return false;
  }
}
