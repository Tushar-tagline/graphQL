import { createAction, props } from "@ngrx/store"

export const spinerstart = '[page in start] student start'

export const spinerStart = createAction(spinerstart,props<{status:boolean}>())

 