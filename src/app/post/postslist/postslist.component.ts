import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { post } from 'src/app/model/post.model';
import { appstate } from 'src/app/store/app.state';
import { deletepost } from '../state/post.action';
import { getpost } from '../state/post.selector';

@Component({
  selector: 'app-posts',
  templateUrl: './postslist.component.html',
  styleUrls: ['./postslist.component.scss'],
})
export class PostsComponent implements OnInit {
  public posts$!: Observable<post[]>
  constructor(private store: Store<appstate>) { }

  ngOnInit(): void {
    this.posts$ = this.store.select(getpost)
  }

  deletedata(id:any){
    if(confirm('are you sure you want to delete')){
      this.store.dispatch(deletepost({id}))
    }
    // const post :post ={
      
    // }
    // this.store.dispatch(deletepost({id}))
  }
}
