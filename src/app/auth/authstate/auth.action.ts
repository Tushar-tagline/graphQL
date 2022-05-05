import { createAction, props } from "@ngrx/store"

export const loginstart = '[page in start] login start'
export const loginsuccess = '[page in success] login success'
export const loginfail = '[page in fail] login fail'

export const loginStart = createAction(loginstart,props<{email:string;password:string}>());

export const loginSuccess = createAction(loginsuccess)