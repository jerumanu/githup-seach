import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { SearchComponent } from './search/search.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RipoComponent } from './ripo/ripo.component';
import { UserComponent } from './user/user.component';
import { RipoService } from "./ripo.service";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
@NgModule({
  declarations: [
    AppComponent,
  
    NavBarComponent,
    RipoComponent,
    UserComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RipoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
