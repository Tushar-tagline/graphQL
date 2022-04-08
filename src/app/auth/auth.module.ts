import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LoginComponent } from './login/login.component';
import { RouterModule, Routes, ROUTES } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes:Routes=[
  {
    path:'',
    children:[{
      path:'login',
      component:LoginComponent
      }
  ]
  }
]
@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class AuthModule { }
