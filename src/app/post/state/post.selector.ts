import { state } from "@angular/animations";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { postReducer } from "./post.reducer";
import { poststate } from "./post.state";

const getallpost = createFeatureSelector<poststate>('posts')

export const getpost = createSelector(getallpost,(state)=>{
    return state.posts
})

export const getpostbyid = createSelector(getallpost,(state:any,props:any):any=>{
    const getPost=state.posts.find((item:any) => 
        item.id == props.id
    );
    return getPost;
})