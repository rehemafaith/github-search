import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";
import { FormsModule} from "@angular/forms"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
//import { UserdisplayComponent } from "./userdisplay/UserdisplayComponent";
import { ResultdisplayComponent } from './resultdisplay/resultdisplay.component';
import {UserRequestService} from './user-request.service';
import { UserdisplayComponent } from './userdisplay/userdisplay.component'



@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    //UserdisplayComponent,
    ResultdisplayComponent,
    UserdisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UserRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
 