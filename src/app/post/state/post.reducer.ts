import { state } from "@angular/animations"
import { createReducer, on } from "@ngrx/store"
import { addpost, updatePost1 } from "./post.action"
import { initialstate } from "./post.state"

const _postReducer = createReducer(initialstate , 
    on(addpost , (state ,action)=>{
    let post ={...action.post}
    post.id = state.posts.length +1
    return{
        ...state,
        posts:[...state.posts,post]
    }
}), on(updatePost1 , (state ,action)=>{
    console.log('state :>> ', state);
    let post ={...action.post}
    post.id = state.posts.length +1
    return{
        ...state,
        posts:[...state.posts,post]
    }})
)


export function postReducer(state: any, action: any) {
    return _postReducer(state, action)
}