import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';
import { CounterComponent } from './counters/counter/counter.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { PostsComponent } from './post/postslist/postslist.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
    
  },
  {
    path:'counter',
    component:CounterComponent
  },
  {
    path:'listdata',
    component:ListComponent
  },
  {
    path:'posts',
    component:PostsComponent,
    children:[{
      path:'addpost',
      component:AddPostComponent
    },
    {
      path:'edit/:id',
      component:EditComponent
    }
  ]
  },
  
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
