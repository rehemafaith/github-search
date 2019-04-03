import { Component, OnInit } from '@angular/core';
import {UserRequestService} from '../user-request.service'

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  providers:[UserRequestService],
  styleUrls: ['./searchbar.component.css']

})
export class SearchbarComponent implements OnInit {
    
  inputsearch=''
  outputresult=[]
  users:any=[]
  reposearch=''
  outputRepoSearch=[]
  repos:any=[]
  constructor(private userrequestservice:UserRequestService) {}
    
    
    search(inputsearch:string){
      let promise= new Promise((resolve,reject)=> {
      this.userrequestservice.userInfo(this.inputsearch).toPromise().then((data)=>{
        this.outputresult=data['items'];
        this.users=data;
        console.log(data)
      })
    }
      )
    }
    searchRepo(reposearch:string){
      let promise= new Promise((resolve,reject)=> {
      this.userrequestservice.reposLink(this.reposearch).toPromise().then((data)=>{
        this.outputRepoSearch=data['items'];
        this.repos=data;
        console.log(data)
      })
    }
      )
    }
   

  ngOnInit() {
  }

}
