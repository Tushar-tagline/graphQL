import { createReducer } from "@ngrx/store"
import { initialstate } from "./post.state"

const _postReducer = createReducer(initialstate)


export function postReducer(state: any, action: any) {
    return _postReducer(state, action)
}