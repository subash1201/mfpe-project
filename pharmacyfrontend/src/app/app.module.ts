import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeetinglistComponent } from './componenets/meetinglist/meetinglist.component';
import { LoginComponent } from './componenets/login/login.component';
import { DashboardComponent } from './componenets/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { NavbarComponent } from './componenets/navbar/navbar.component';
import { DemandmedicineComponent } from './componenets/demandmedicine/demandmedicine.component';
import { SupplylistComponent } from './componenets/supplylist/supplylist.component'

@NgModule({
  declarations: [
    AppComponent,
    MeetinglistComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    DemandmedicineComponent,
    SupplylistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
