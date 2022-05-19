import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  // public counter: number = 0
  constructor() { }

  ngOnInit(): void {
  }
  // onplus() {
  //   this.counter++;
  // }
  // onmin() {
  //   this.counter--;
  // }

  // onreset() {
  //   this.counter = 0;
  // }
}
