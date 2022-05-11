import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthserviceService } from 'src/app/service/authservice.service';
import { appstate } from 'src/app/store/app.state';
import { studentStart } from '../studentState/student.action';
import { getAllStudent } from '../studentState/student.selector';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.scss']
})
export class StudentlistComponent implements OnInit {
public allStudents:any;
public token:any
  constructor(private authservice: AuthserviceService,private store:Store<appstate>) { }

  ngOnInit(): void {
   
    this.store.dispatch(studentStart());
    this.store.select(getAllStudent).subscribe((studentData: any) => {
    console.log('studentData :>> ', studentData);
      this.allStudents = studentData;
      console.log('data :>> ', studentData);
    });
  }

 
}
