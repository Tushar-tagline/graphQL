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
    path: '',
    component: HomeComponent

  },
  {
    path: 'counter',
    loadChildren: () => import('./counters/counter.module').then(m => m.CounterModule)
  },
  {
    path: 'listdata',
    component: ListComponent
  },
  {
    path: 'posts',
    loadChildren: () => import('./post/post.module').then(m => m.PostModule)

  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'student',
    loadChildren: () => import('./student/student.module').then(m => m.StudentModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
