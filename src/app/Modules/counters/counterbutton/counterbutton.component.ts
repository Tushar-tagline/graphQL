import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from 'src/app/state/couter.action';
import { counterstate } from 'src/app/state/couter.state';

@Component({
  selector: 'app-counterbutton',
  templateUrl: './counterbutton.component.html',
  styleUrls: ['./counterbutton.component.scss']
})
export class CounterbuttonComponent implements OnInit {
  //@Output() increment =new EventEmitter<void>();
  //@Output() decrement =new EventEmitter<void>();
  //@Output() reset =new EventEmitter<void>();
  constructor(private store: Store<{ counter: { counter: counterstate } }>) { }

  ngOnInit(): void {
  }
  public onPlus(): void {
    // this.increment.emit()
    this.store.dispatch(increment())
  }
  public onMin(): void {
    //this.decrement.emit()`
    this.store.dispatch(decrement())
  }

  public onReset(): void {
    //this.reset.emit()
    this.store.dispatch(reset())
  }
}
