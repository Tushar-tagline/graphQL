import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { appstate } from './store/app.state';
import { getloading } from './store/shared/shared.selector';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showloading!:Observable<boolean>

  constructor(private store:Store<appstate>){

  }

  ngOnInit(): void {
    this.showloading =this.store.select(getloading)
  }

}
