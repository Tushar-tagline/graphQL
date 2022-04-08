import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { Apollo, ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InMemoryCache } from '@apollo/client/core';
import { ListComponent } from './list/list.component';
import { CounterComponent } from './counters/counter/counter.component';
import { CounterbuttonComponent } from './counters/counterbutton/counterbutton.component';
import { CounteroutputComponent } from './counters/counteroutput/counteroutput.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './state/couter.reducer';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './post/postslist/postslist.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { CommonModule } from '@angular/common';
import { CustomoutputComponent } from './counters/customoutput/customoutput.component';
import { appreducer } from './store/app.state';
import { AddPostComponent } from './add-post/add-post.component';
import { EditComponent } from './edit/edit.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CounterComponent,
    CounterbuttonComponent,
    CounteroutputComponent,
    CustomoutputComponent,
    HomeComponent,
    PostsComponent,
    AddPostComponent,
    EditComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ApolloModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forRoot(appreducer),
    StoreDevtoolsModule.instrument({ logOnly: environment.production }),
    
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri:'https://graphqlzero.almansi.me/api'
          })
        };
      },
      deps: [HttpLink]
    }
  ],
   bootstrap: [AppComponent]
})
export class AppModule {
  // constructor(public apollo: Apollo,public httplink:HttpLink) {
  //   apollo.create({
  //     link: httplink.create({ uri: 'https://jsonplaceholder.typicode.com/albums' }),
  //     cache: new InMemoryCache()
  //   })
  // }
}
