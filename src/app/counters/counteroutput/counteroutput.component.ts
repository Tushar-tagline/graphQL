import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { counterstate } from 'src/app/state/couter.state';

@Component({
  selector: 'app-counteroutput',
  templateUrl: './counteroutput.component.html',
  styleUrls: ['./counteroutput.component.scss']
})
export class CounteroutputComponent implements OnInit {
  // @Input() counter:any
  // public counter: number = 0
  public counter$!:Observable<any>
  constructor(private store: Store<{ counter: { counter: counterstate } }>) { }

  ngOnInit(): void {  
   this.counter$= this.store.select('counter')
  }

}

//for learning 
// public counter: number = 0
//   constructor(private store: Store<{ counter: { counter: number } }>) { }

//   ngOnInit(): void {
//     this.store.select('counter').subscribe((data) => {
//       this.counter = data.counter
//     })
//   }

// }