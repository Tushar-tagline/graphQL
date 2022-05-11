import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { Apollo, ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InMemoryCache } from '@apollo/client/core';
import { ListComponent } from './list/list.component';

import { StoreModule } from '@ngrx/store';

import { HomeComponent } from './home/home.component';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { EffectsModule } from '@ngrx/effects';



@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HomeComponent,
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
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({ logOnly: environment.production }),
    EffectsModule.forRoot([]),
    
    
  ],

  // schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  
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
