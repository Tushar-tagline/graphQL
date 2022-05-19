// export function postReducer(state: any, action: any) {
//     return _postReducer(state, action)
// }

import { createReducer, on, State } from "@ngrx/store"
import { loginsuccess } from "./auth.action"
import { initialstate } from "./auth.state"

export const _authreducer = createReducer(initialstate)

export function authreducer(state:any, action:any){
    return _authreducer(state,action)
}