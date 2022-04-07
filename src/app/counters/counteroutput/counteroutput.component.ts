import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getcouter } from 'src/app/state/couter.selector';
import { counterstate } from 'src/app/state/couter.state';

@Component({
  selector: 'app-counteroutput',
  templateUrl: './counteroutput.component.html',
  styleUrls: ['./counteroutput.component.scss']
})
export class CounteroutputComponent implements OnInit {
  // @Input() counter:any
  //public counter: any = 0
  public counter$!:Observable<any>
  constructor(private store: Store<{ counter: { counter: counterstate } }>) { }

  ngOnInit(): void {  
    this.counter$=this.store.select(getcouter)
    console.log('counter$ :>> ', this.counter$);
    // .subscribe((data)=>{
    //   console.log('coutercall :>> ');
    //   this.counter =data
    // }) 
  }

}

//    for learning 
// public counter: number = 0
//   constructor(private store: Store<{ counter: { counter: number } }>) { }

//   ngOnInit(): void {
//     this.store.select('counter').subscribe((data) => {
//       this.counter = data.counter
//     })
//   }

// }