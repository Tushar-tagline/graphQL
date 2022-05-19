import { createAction, props } from "@ngrx/store";

import { User } from "src/app/model/user.model";

export const studentstart = '[page in start] student start'
export const studentSuccess = '[page in success] student success'
export const studentfail = '[page in fail] student fail'


export const studentStart = createAction(studentstart,props<{name:string,email:string,password:string,token:string}>());

export const studentsuccess = createAction(studentSuccess,props<{user:User}>())