import { Injectable } from '@angular/core';
import { exhaustMap, map, tap } from 'rxjs';
import { AuthserviceService } from 'src/app/service/authservice.service';
import {
  loginstart,
  loginSuccess,
  loginsuccess,
  signupstart,
  signupsuccess,
} from './auth.action';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { appstate } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { spinerStart } from 'src/app/store/shared/shared.action';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  public token: any;
    
  constructor(private action$: Actions, private authservies: AuthserviceService,private store:Store<appstate>, private router:Router) {}

public login$ = createEffect(() => {
    return this.action$.pipe(
      ofType(loginstart),
      exhaustMap((action: any) => {
        console.log('action :>> ', action);
        return this.authservies.signIn(action.email, action.password).pipe(
          map((data) => {
            console.log('data :>> ', data);
            this.store.dispatch(spinerStart({status:false}))
            const user = this.authservies.formatUser(data)
            return loginSuccess();
          })
        );
      })
    );
  });

public signup$ = createEffect(() => {
    return this.action$.pipe(
      ofType(signupstart),
      exhaustMap((action: any) => {
        console.log('action :>> ', action);
        return this.authservies
          .signup(action.name, action.email, action.password, action.role)
          .pipe(
            map((data) => {
              console.log('data :>> ', data);
              this.token = localStorage.getItem(data.token)
              return signupsuccess();
            })
          );
      })
    );  
  });

//   public redirect = createEffect(()=>{
//       return this.action$.pipe(ofType(loginSuccess),tap(
//           (action)=>{
//             this.router.navigate(['/'])
//           }
//       ))
//   })
}
