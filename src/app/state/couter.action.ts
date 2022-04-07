
import { createAction, props } from "@ngrx/store";

export const increment =createAction('increment')
export const decrement = createAction('decrement')
export const reset = createAction('reset')
export const customadd=createAction('addvalue',props<{value:number}>())
export const changname=createAction('changename')