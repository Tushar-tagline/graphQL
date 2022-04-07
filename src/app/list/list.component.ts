import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { map, Observable } from 'rxjs';
import { albums, Query } from '../types';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public rates: any = []
  public getalbums: any
  selectedtitle: string = '';
  public GETALBUM = gql`
  query {
    albums(options:{paginate:{page:0,limit:15}}) {
      data{
       id
       title
     }
    }
  }`;

  public Get_BrandFilter = gql`
  query Albums($options: PageQueryOptions) {
    albums(options: $options) {
      data {
        id
        title
      }
    
    }
  }`;

  public updatealbum = gql`
  mutation{
    updateAlbum(id:"2",input:{title:"hello"}){
 	id
  title
    user{
      id 
      name
  }
    photos{
      data{
        title
      }
    }
  }
 }
 `;

  public deletealbum = gql`
  mutation{
    deleteAlbum(id:"2")
  }`

  public createalbum = gql`
  mutation{
    createAlbum(input:{title:"testddemo",userId:"4"}){
      id
      title
      
    }
  }`


  constructor(public apollo: Apollo) { }

  ngOnInit() {
    this.getalbums = this.apollo.watchQuery({
      query: this.GETALBUM,
      variables: {
        "options": {
          "paginate": {
            "page": 1,
            "limit": 5
          }
        }
      },
      fetchPolicy: 'network-only'
    })
    this.rates = this.getalbums
      .valueChanges.subscribe((res: any) => {
        this.rates = res.data.albums.data
        console.log('res :>> ', res);
      })
  }

  public updatedata() {
    this.apollo.mutate({
      mutation: this.updatealbum
    }).subscribe((res) => {
      // this.rates = res.data
      console.log('res :>> ', res.data);
    })
  }

  public deletedata() {
    this.apollo.mutate({
      mutation: this.deletealbum
    }).subscribe((res) => {
      console.log('res :>> ', res);
    })
  }

  public createdata() {
    this.apollo.mutate({
      mutation: this.createalbum
    }).subscribe((res) => {
      // this.rates = [res.data]
      console.log('res :>> ', res);
    })
  }

  // fetchMore() {
  //   this.getalbums.fetchMore({
  //     query: this.GETALBUM,
  //     variables: {
  //       offset: this.rates.length,
  //     },
  //   });
  // }
  searchByBrand() {
    this.apollo.watchQuery<any>({
      query: this.Get_BrandFilter,
      variables: {
        "options": {
          "search": {
            "q": this.selectedtitle
          },
        }
      }
    })
      .valueChanges
      .subscribe((res) => {
        //console.log(loading);
        this.rates = res.data.albums.data
        console.log('serch :>> ', this.rates);
      });
  }

}
