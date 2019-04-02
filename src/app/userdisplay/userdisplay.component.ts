
import { Component, OnInit,Input, Output  } from '@angular/core';

import {UserRequestService} from '../user-request.service';
 import {User} from '../user'
 @Component({
  selector: 'app-userdisplay',
  templateUrl: './userdisplay.component.html',
  styleUrls: ['./userdisplay.component.css']
})
export class UserdisplayComponent implements OnInit {
  @Input() userme:JSON
  @Output() 
  user:User;
  constructor(private userrequestservice:UserRequestService) {
   
   }

  ngOnInit() {
  this.user =new User(this.userme)
  }

}
