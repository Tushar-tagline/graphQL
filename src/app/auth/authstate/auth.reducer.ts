// export function postReducer(state: any, action: any) {
//     return _postReducer(state, action)
// }

import { createReducer } from "@ngrx/store"
import { initialstate } from "./auth.state"

export const _authreducer = createReducer(initialstate)

export function authreducer(state:any, action:any){
    return _authreducer(state,action)
}