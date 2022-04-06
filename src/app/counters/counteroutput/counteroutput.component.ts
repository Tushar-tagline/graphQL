import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counteroutput',
  templateUrl: './counteroutput.component.html',
  styleUrls: ['./counteroutput.component.scss']
})
export class CounteroutputComponent implements OnInit {
  // @Input() counter:any
  public counter: number = 0
  constructor(private store: Store<{ counter: { counter: number } }>) { }

  ngOnInit(): void {
    this.store.select('counter').subscribe((data) => {
      this.counter = data.counter
    })
  }

}
