import { Injectable, inject } from '@angular/core';
import { User } from './User';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn: boolean = false ;
  private http = inject(HttpClient);
  private readonly API_URL = 'http://localhost:3000/users';

  setLoggedIn(val:boolean){
    this.loggedIn = val ;
  }

  isLoggedIn() {
    return this.loggedIn ;
  }

  logIn(email:string, password:string){
    console.log(email,password);
    const params = new HttpParams()
    .set('email', email)
    .set('password', password);
    return this.http.get<User[]>(this.API_URL, { params });
   
  }

  logOut(){
    this.loggedIn = false ;
  }
  
  signUp(user:User){
    return this.http.post<User>(this.API_URL, user);
  }

  getByID(id:string){
    const params = new HttpParams()
    .set('id', id)
    return this.http.get<User[]>(this.API_URL, { params });
  }

}
