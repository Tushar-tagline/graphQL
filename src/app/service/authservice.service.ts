import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  private url = environment.url;
  public getToken = localStorage.getItem('token')

  constructor(private http:HttpClient) { }

  public signIn(email: any, password: any): Observable<any> {
    return this.http.post<any>(this.url + 'users/Login', {email , password});
  }

  public signup(name:any,email:any,password:any,role:any):Observable<any>{
    return this.http.post<any>(this.url + 'users/SignUp',{name,email,password,role})
  }

  public studentlist(): Observable<any> {
    let headers = new HttpHeaders()
    headers = headers.set('content-type', 'application/json')
    headers = headers.set('Access-Control-Allow-Origin', '*');
    headers = headers.set('access-token', `${this.getToken}`);
    console.log('headers :>> ', headers);
    return this.http.get<any>(this.url + 'dashboard/Teachers', { headers: headers })
  }
}
 