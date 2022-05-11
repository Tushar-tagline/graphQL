import { createFeatureSelector, createSelector } from "@ngrx/store";

export const EXAM_STATE_NAME = 'exam';

const stateStudent = createFeatureSelector<any>(EXAM_STATE_NAME);

export const getAllStudent = createSelector(stateStudent, state => {
    return state.student;
});