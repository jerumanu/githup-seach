import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RipoComponent } from './ripo/ripo.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NavBarComponent,
    RipoComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
