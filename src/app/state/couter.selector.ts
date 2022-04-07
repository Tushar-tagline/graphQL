import { createFeatureSelector, createSelector } from "@ngrx/store";
import { counterstate } from "./couter.state";

export const appmodulename = 'firstngrx'

const getcouterstate =   createFeatureSelector<counterstate>(appmodulename);

export const getcouter = createSelector(getcouterstate,(state)=>{
    console.log('state :>> ', state);
    return state.counter
});

export const getchangename =createSelector(getcouterstate,(state)=>{
    return state.changname
})