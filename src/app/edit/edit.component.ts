import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { post } from '../model/post.model';
import { updatePost1, update_post } from '../post/state/post.action';
import { getpostbyid } from '../post/state/post.selector';
import { appstate } from '../store/app.state';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  public updatepost!: FormGroup
  public post!: post
  public postSubscription!: Subscription
  constructor(private active: ActivatedRoute, private store: Store<appstate>, private fb: FormBuilder ,private route:Router) { }

  ngOnInit(): void {
    this.active.paramMap.subscribe((res) => {
      const id = res.get('id')
      this.store.select(getpostbyid, { id })
      this.postSubscription = this.store.select(getpostbyid, { id }).subscribe((data): any => {
        this.post = data;
        console.log('this.post :>> ', this.post);
        this.createform()
      })
    })

  }

  createform() {
    this.updatepost = this.fb.group({
      title: this.post?.title,
      description: this.post?.description
    })
  }

  onSubmit(){
    const title = this.updatepost.value.title
    const description = this.updatepost.value.description

    const post:post={
      id:this.post.id,
      title,
      description
    }
    this.store.dispatch(updatePost1({post}))
    this.route.navigate(['/posts'])
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if (this.postSubscription) {
      this.postSubscription.unsubscribe();
    }
  }
}
