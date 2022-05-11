import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { appstate } from 'src/app/store/app.state';
import { loginStart, loginstart } from '../authstate/auth.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public signin!:FormGroup
  public token:any
 
   constructor(private store:Store<appstate>) { }

  ngOnInit(): void {
    this.signin = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-z]).{6,32}$'),
      ]),
    });
  
  }

  
  public login(){
   const email = this.signin.value.email;
   const password = this.signin.value.password
    this.store.dispatch(loginStart({email,password}))
  }
}
