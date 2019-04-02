import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
//import { UserdisplayComponent } from "./userdisplay/UserdisplayComponent";
import { ResultdisplayComponent } from './resultdisplay/resultdisplay.component';
import {UserRequestService} from './user-request.service'


@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    //UserdisplayComponent,
    ResultdisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UserRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
 