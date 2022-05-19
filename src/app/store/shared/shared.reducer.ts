import { createReducer, on } from "@ngrx/store";
import { initialstate } from "src/app/state/couter.state";
import { spinerStart, spinerstart } from "./shared.action";
import { inintialState } from "./shared.state";

export const _spinerreducer = createReducer(inintialState , on(spinerStart,(state,action)=>{
    return {
        ...state,
        isloding: action.status
    }
}))

export function spinerreducer(state:any, action:any){
    return _spinerreducer(state,action)
}