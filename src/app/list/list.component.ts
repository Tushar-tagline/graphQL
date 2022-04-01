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
  selectedtitle:string = '';  
  
  
  //public Get_BrandFilter = gql`
  // query ($title:String){
  //   albums(title:$title){
  //     data{
  //       id
  //       title
  //     }
  //   }
  // } 
  // `;

  public Get_BrandFilter = gql`
  query 
  {
    albums(options:{ search :{ q: "omnis laborum odio" }   } ) {
      data {
        id
        title
      }
      
    }
  }`;

  public GETALBUM = gql`
  query {
    albums(options:{paginate:{page:0,limit:10}}) {
      data{
       id
       title
     }
    }
  }`;

  public updatealbum = gql`
  mutation{
    updateAlbum(id:"3",input:{title:"hello tushar"}){
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
     this.getalbums
      .valueChanges.subscribe((res: any) => {
        this.rates = res.data.albums.data
        // console.log('getAlbum :>> ', res);
      })
    //this.deletedata(2)
   //this.searchByBrand()
  }

  public updatedata() {
    this.apollo.mutate({
      mutation: this.updatealbum
    }).subscribe((res) => {
      // this.rates = [res.data]
      console.log('update :>> ', res.data);
    })
  }

  public deletedata(id:any) {
    this.apollo.mutate({
      mutation: this.deletealbum
    }).subscribe((res) => {
      console.log('delete :>> ', res);
    })
  }

  public createdata() {
    this.apollo.mutate({
      mutation: this.createalbum
    }).subscribe((res) => {
      // this.rates = [res.data]
      console.log('create :>> ', res);
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
  searchByBrand(){
    this.apollo.watchQuery<any>({
       query: this.Get_BrandFilter,
       variables:{
         title: this.selectedtitle
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
