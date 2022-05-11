import { Injectable } from "@angular/core";
import { exhaustMap, map } from "rxjs";
import { AuthserviceService } from "src/app/service/authservice.service";
import { loginstart, loginSuccess, loginsuccess, signupstart, signupsuccess } from "./auth.action";
import { Actions, createEffect, ofType } from "@ngrx/effects"

@Injectable()
export class AuthEffects {
public token:any

    constructor(private action$: Actions, private authservies: AuthserviceService) { }

    login$ = createEffect(() => {
        return this.action$.pipe(
            ofType(loginstart),
            exhaustMap((action: any) => {
                console.log('action :>> ', action);
                return this.authservies.signIn(action.email,action.password).pipe(
                    map((data) => {
                        console.log('data :>> ', data);
                        return loginSuccess()
                    
                    })
                )
            })
        )

    })


    signup$ = createEffect(()=>{
        return this.action$.pipe(ofType(signupstart),exhaustMap((action:any)=>{
            console.log('action :>> ', action);
            return this.authservies.signup(action.name,action.email,action.password,action.role).pipe(
                map((data)=>{
                    console.log('data :>> ', data);
                    return signupsuccess()
                })
            )
        }))
    })
}