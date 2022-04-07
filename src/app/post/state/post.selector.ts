import { state } from "@angular/animations";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { poststate } from "./post.state";

const getallpost = createFeatureSelector<poststate>('posts')

export const getpost = createSelector(getallpost,(state)=>{
    return state.posts

})