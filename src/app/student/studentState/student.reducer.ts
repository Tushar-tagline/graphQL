import { createReducer, on } from "@ngrx/store"

import { studentStart, studentstart, studentsuccess } from "./student.action"
import { initialstate } from "./student.state"

const _examReducer = createReducer(initialstate,
    on(studentStart, (state: any) => {
        return {
            ...state,
        }
        
    }),
    on(studentsuccess, (state: any, action: any) => {
        return {
            ...state,
            student: action.student
        }
    }), 
    
)

export function examReducer(state:any, action:any){
    console.log('action :>> ', action);
    return _examReducer(state,action)
}