import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './componenets/dashboard/dashboard.component';
import { DemandmedicineComponent } from './componenets/demandmedicine/demandmedicine.component';
import { LoginComponent } from './componenets/login/login.component';
import { MeetinglistComponent } from './componenets/meetinglist/meetinglist.component';
import { SupplylistComponent } from './componenets/supplylist/supplylist.component';


const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"meetlist",component:MeetinglistComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"demand",component:DemandmedicineComponent},
  {path:"supplies/:name/:count",component:SupplylistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
