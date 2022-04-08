import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { validate } from 'graphql';
import { post } from '../model/post.model';
import { addpost, add_post } from '../post/state/post.action';
import { getpost } from '../post/state/post.selector';
import { appstate } from '../store/app.state';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  public addProduct!: FormGroup

  constructor(private store: Store<appstate>, private fb: FormBuilder,private route:Router) { }

  ngOnInit(): void {
    this.addProduct = new FormGroup({
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required)
    })
  }
  onSubmit() {
    const data: post = {
      title: this.addProduct.value.title,
      description: this.addProduct.value.description
    }
    this.store.dispatch(addpost({ post: data }))
    this.route.navigate(['/posts'])
  }
} 
