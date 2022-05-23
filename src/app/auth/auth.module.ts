import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LoginComponent } from './login/login.component';
import { RouterModule, Routes, ROUTES } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { appreducer } from '../store/app.state';
import { logindata } from './authstate/auth.selector';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './authstate/auth.effects';
import { SignupComponent } from './signup/signup.component';
import { CoreModule } from '../core/core.module';

const routes:Routes=[
  {
    path:'',
    children:[{
      path:'login',
      component:LoginComponent
      },
      {
        path:'signup',
        component:SignupComponent
      },
  
  ]
  }
]
@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature(logindata,appreducer),
    EffectsModule.forFeature([AuthEffects]),
    CoreModule
  ]
})
export class AuthModule { }
