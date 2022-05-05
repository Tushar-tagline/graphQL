import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LoginComponent } from './login/login.component';
import { RouterModule, Routes, ROUTES } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { appreducer } from '../store/app.state';
import { logindata } from './authstate/auth.selector';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './authstate/auth.effects';

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
    ReactiveFormsModule,
    StoreModule.forFeature(logindata,appreducer),
    EffectsModule.forFeature([AuthEffects]),
  ]
})
export class AuthModule { }
