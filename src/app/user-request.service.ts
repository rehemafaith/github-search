import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http'

@Injectable()
export class UserRequestService {
 apikey=environment.apiKey;
  username:string;
 private repo:string;
  constructor(private http:HttpClient) {
    
   }
   
  //  userRequest(user){

      
  //   return new Promise ((resolve,reject)=>{
  //     this.http.get<JSON>(`http://api.github.com/search/users?q=${user}&access-token=${this.apikey}` ).toPromise().then(response=>{
  //       resolve(response);
  //     },error=>{
  //       console.log("We can't find what you are looking for.");
  //       reject(error);
  //     }
  //     );
  //   });
  // }
  // repoRequest(repo){
      
  //   return new Promise ((resolve,reject)=>{
  //     this.http.get<JSON>(`http://api.github.com/search/repositories?q=${repo}&access-token=${this.apikey}` ).toPromise().then(response=>{
  //       resolve(response);
  //     },error=>{
  //       console.log("We can't find what you are looking for.");
  //       reject(error);
  //     }
  //     );
  //   });
  // }
   reposLink(repos){

    return new Promise((resolve,reject)=> {
        this.http.get<JSON[]>(`${repos}?access_token=${this.apikey}`).toPromise().then(response => {
            console.log(response)
            resolve()
          }, error => {
            reject(error)
          }
        );
      }
    );
  }



  userInfo(inputsearch){

      return  this.http.get<JSON[]>(`https://api.github.com/users/`+inputsearch)
    
  }
    }
