import { createAction, props } from "@ngrx/store";
import { ExamData } from "src/app/model/post.model";

export const studentstart = '[page in start] student start'
export const studentSuccess = '[page in success] student success'
export const studentfail = '[page in fail] signup fail'


export const studentStart = createAction(studentstart);

export const studentsuccess = createAction(studentSuccess,props<{student:ExamData[]}>())