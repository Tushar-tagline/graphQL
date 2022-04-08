import { state } from "@angular/animations"
import { createReducer, on } from "@ngrx/store"
import { Action } from "rxjs/internal/scheduler/Action"
import { addpost, deletepost, updatePost1 } from "./post.action"
import { initialstate } from "./post.state"

const _postReducer = createReducer(initialstate,
    on(addpost, (state, action) => {
        let post = { ...action.post }
        post.id = state.posts.length + 1
        return {
            ...state,
            posts: [...state.posts, post]
        }
    }), on(updatePost1, (state, action) => {
        // console.log('state :>> ', state);
        const newpost = state.posts.map((res) => {
            return action.post.id === res.id ? action.post : res
        })

        return {
            ...state,
            posts: newpost
        }
    }),on(deletepost,(state ,{id})=>{
        const newdelete = state.posts.filter((post)=>{
            return post.id !== id
        })
         return {
             ...state,
             posts:newdelete
         }
    })
)


export function postReducer(state: any, action: any) {
    return _postReducer(state, action)
}