import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private http:HttpClient) { }

  signin(email:string,password:string){
   return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=${environment.FIRE_BASE_KEY}`,{
     email,password,returnSecureToken:true
   })
  }
}
