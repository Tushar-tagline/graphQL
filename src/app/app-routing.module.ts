import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './Modules/post/add-post/add-post.component';
import { CounterComponent } from './Modules/counters/counter/counter.component';
import { EditComponent } from './Modules/post/edit/edit.component';
import { ListComponent } from './list/list.component';
import { PostsComponent } from './Modules/post/postslist/postslist.component';
import { DashboardComponent } from './Modules/home/dashboard/dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent

  },
  {
    path: 'counter',
    loadChildren: () => import('./Modules/counters/counter.module').then(m => m.CounterModule)
  },
  {
    path: 'listdata',
    component: ListComponent
  },
  {
    path: 'posts',
    loadChildren: () => import('./Modules/post/post.module').then(m => m.PostModule)

  },
  {
    path: 'auth',
    loadChildren: () => import('./Modules/auth/auth.module').then(m => m.AuthModule)
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
