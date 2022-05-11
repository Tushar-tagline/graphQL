import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs";
import { AuthserviceService } from "src/app/service/authservice.service";
import { studentStart, studentsuccess } from "./student.action";

export class ExamEffects {
    constructor(private authservice: AuthserviceService, private actions$: Actions) { }

    loadStudents$ = createEffect(() => {
        return this.actions$.pipe(ofType(studentStart), mergeMap((action: any) => {
            console.log('action :>> ', action);
            return this.authservice.studentlist().pipe(map((data) => {
                console.log('data :>> ', data);
                return studentsuccess({student:data.data})
            })
            )
        }))

    });
}