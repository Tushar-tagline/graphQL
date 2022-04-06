import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { Apollo, ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { FormsModule } from '@angular/forms';
import { InMemoryCache } from '@apollo/client/core';
import { ListComponent } from './list/list.component';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counters/counter/counter.component';
import { CounterbuttonComponent } from './counters/counterbutton/counterbutton.component';
import { CounteroutputComponent } from './counters/counteroutput/counteroutput.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './state/couter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CounterComponent,
    CounterbuttonComponent,
    CounteroutputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ApolloModule,
    FormsModule,
    CommonModule,
    StoreModule.forRoot({counter:counterReducer}),
    
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
