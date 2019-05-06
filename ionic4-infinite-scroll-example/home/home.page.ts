import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public http: HttpClient){

    this.getData()
  }

  
  usersList:any[]=[]
  getData()
  {

    this.http.get('https://randomuser.me/api/?results=10').subscribe(data=>{
//process the json data
console.log(data)
this.usersList=data["results"]
})
  }

  loadData(event) 
  {
    this.http.get('https://randomuser.me/api/?results=10').subscribe(data=>{
//process the json data
event.target.complete();
console.log(data)
this.usersList=this.usersList.concat(data["results"])
})
  }



    
}
