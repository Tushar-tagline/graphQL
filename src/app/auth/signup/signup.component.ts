import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthserviceService } from 'src/app/service/authservice.service';
import { appstate } from 'src/app/store/app.state';
import { signupStart, signupsuccess } from '../authstate/auth.action';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public signup!: FormGroup
  public role: Array<any> = [{
    id: '1',
    value: 'teacher'
  },
  {
    id: '2',
    value: 'student'
  }
  ]
  constructor(private authservice: AuthserviceService,private store:Store<appstate>) { }

  ngOnInit(): void {
    this.signup = new FormGroup({
      name: new FormControl(null, Validators.required),
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
      role: new FormControl(null, Validators.required)
    });
  }

  onSubmit(){
    const name = this.signup.value.name
    const email = this.signup.value.email
    const password = this.signup.value.password
    const role = this.signup.value.role
    this.store.dispatch(signupStart({name,email,password,role}))
  }

}
