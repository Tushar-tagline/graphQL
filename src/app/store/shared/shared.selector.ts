import { createFeatureSelector, createSelector } from "@ngrx/store"
import { Shared } from "./shared.state"

export const spinerdata = 'shared'


const getspiner = createFeatureSelector<Shared>(spinerdata)

export const getloading = createSelector(getspiner,(state)=>{
    return state.isloding;
})