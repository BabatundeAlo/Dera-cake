import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNavComponent } from './app-nav/app-nav.component';
import { HomeComponent } from './home/home.component';
import 'hammerjs';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PricingsComponent } from './pricings/pricings.component';
@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    HomeComponent,
    PricingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
