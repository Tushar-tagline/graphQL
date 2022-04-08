import { createAction, props } from "@ngrx/store"
import { post } from "src/app/model/post.model"

export const add_post = '[posts page] add post'
export const update_post = '[posts upadate page] add post'
export const delete_post = '[posts delete page] add post'


export const addpost =createAction(add_post,props<{post:post}>())
export const updatePost1 =createAction(update_post,props<{post:post}>())

export const deletepost = createAction(delete_post,props<{id:any}>())
