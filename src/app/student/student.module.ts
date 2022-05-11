import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { StoreModule } from '@ngrx/store';
import { EXAM_STATE_NAME,  } from './studentState/student.selector';
import { appreducer } from '../store/app.state';
import { examReducer } from './studentState/student.reducer';


const routes:Routes=[{
    path:'student-list',
    component:StudentlistComponent
  
}]


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(EXAM_STATE_NAME,examReducer),
  ]
})
export class StudentModule { }
