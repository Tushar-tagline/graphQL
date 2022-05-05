import { Injectable } from "@angular/core";
import { exhaustMap, map } from "rxjs";
import { AuthserviceService } from "src/app/service/authservice.service";
import { loginstart, loginSuccess, loginsuccess } from "./auth.action";
import { Actions, createEffect, ofType } from "@ngrx/effects"

@Injectable()
export class AuthEffects {


    constructor(private action$: Actions, private authservies: AuthserviceService) { }

    login$ = createEffect(() => {
        return this.action$.pipe(
            ofType(loginstart),
            exhaustMap((action: any) => {
                return this.authservies.signin(action.email, action.password).pipe(
                    map((data) => {
                        console.log('data :>> ', data);
                        return loginSuccess()
                    })
                )
            })
        )
    })
}