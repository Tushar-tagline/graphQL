import { state } from "@angular/animations";
import { createReducer, on } from "@ngrx/store";

import { changname, customadd, decrement, increment, reset } from "./couter.action";
import { initialstate } from "./couter.state";

const _counterReducer = createReducer(initialstate, on(increment, (state) => {
    return {
        ...state,
        counter: state.counter + 1
    }
}), on(decrement, (state) => {
    return {
        ...state,   
        counter: state.counter - 1
    }
}), on(reset, (state) => {
    return {
        ...state,
        counter: 0
    }
}),on(customadd , (state,action) => {
    console.log('action :>> ', action);
    return {
        ...state,
        counter:state.counter+ action.value
    }
}),on(changname,(state)=>{
    return{
        ...state,
        changname:'i am tushar'
    }
})
)
export function counterReducer(state: any, action: any) {
    return _counterReducer(state, action)
}