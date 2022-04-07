import { createAction, props } from "@ngrx/store"
import { post } from "src/app/model/post.model"

export const add_post = '[posts page] add post'

export const addpost =createAction(add_post,props<{post:post}>())