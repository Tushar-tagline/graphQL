import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';



const routes: Routes = [
  {
    path:'',
    component:HomeComponent
    
  },
  {
    path:'counters',
    loadChildren:()=>import('./counters/counter.module').then(m => m.CounterModule)
  },
  {
    path:'listdata',
    component:ListComponent
  },
  {
    path:'posts',
    loadChildren:()=>import('./post/post.module').then(m => m.PostModule)
    
  },
  {
    path:'auth',
    loadChildren:()=>import('./auth/auth.module').then(m => m.AuthModule)
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
