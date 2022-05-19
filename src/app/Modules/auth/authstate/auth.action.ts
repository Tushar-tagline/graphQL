import { createAction, props } from "@ngrx/store"

export const loginstart = '[page in start] login start'
export const loginsuccess = '[page in success] login success'
export const loginfail = '[page in fail] login fail'

export const signupstart = '[page in start] signup start'
export const signUpSuccess = '[page in success] signup success'
export const signupfail = '[page in fail] signup fail'

export const loginStart = createAction(loginstart,props<{email:string;password:string}>());

export const loginSuccess = createAction(loginsuccess)

export const signupStart=createAction(signupstart,props<{name:string,email:string;password:string,role:string}>())

export const signupsuccess = createAction(signUpSuccess)