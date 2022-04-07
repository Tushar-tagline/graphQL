import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable, observable } from 'rxjs';
import { changname, customadd } from 'src/app/state/couter.action';
import { getchangename } from 'src/app/state/couter.selector';
import { counterstate } from 'src/app/state/couter.state';

@Component({
  selector: 'app-customoutput',
  templateUrl: './customoutput.component.html',
  styleUrls: ['./customoutput.component.scss']
})
export class CustomoutputComponent implements OnInit {
  public value!: number
  // public name!: any
  public name$!:Observable<any>;
  constructor(private store: Store<{ counter: { counter: counterstate, changname: counterstate } }>) { }

  ngOnInit(): void {
    this.name$=this.store.select(getchangename)
    console.log('name$ :>> ', this.name$);
    // .subscribe((data) => {
    //   console.log('data :>> ', data);
    //   this.name = data
    // })
  }
  addvalue() {
    this.store.dispatch(customadd({ value: +this.value }))
    //console.log('value :>> ', this.value);
  }
  changtext() {
    this.store.dispatch(changname())

  }
}
