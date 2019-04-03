import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";
import { FormsModule} from "@angular/forms"
import {RouterModule,Routes} from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
//import { UserdisplayComponent } from "./userdisplay/UserdisplayComponent";
import { ResultdisplayComponent } from './resultdisplay/resultdisplay.component';
import {UserRequestService} from './user-request.service';
import { NotFoundComponent } from './not-found/not-found.component';
//import { UserdisplayComponent } from './userdisplay/userdisplay.component'
import {RoutingModule} from './routing/routing.module'

const routes:Routes=[
  {path:"resultdisplay",component:ResultdisplayComponent},
  {path:"searchbar",component:SearchbarComponent},
  {path:"",redirectTo:"/searchbar",pathMatch:"full"},
  {path:'**',component:NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    //UserdisplayComponent,
    ResultdisplayComponent,
    NotFoundComponent,
  //  UserdisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    RoutingModule
  ],
  providers: [UserRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
 