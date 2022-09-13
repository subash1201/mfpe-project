import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Demand } from '../models/demand';
import { Meetlist } from '../models/meetlist';
import { Supplies } from '../models/supplies';
import { Supplydata } from '../models/supplydata';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  getmeetlist(date:string):Observable<Meetlist[]>{
    return this.http.get<Meetlist[]>("https://localhost:44372/api/ScheduleMeeting?startDate="+date);
  }
  validateuser(user:User):Observable<any>{
    return this.http.post<any>("https://localhost:44342/api/Token/AuthenticateUser",user)
  }
  adddemand(demand:Demand):Observable<any>{
    return this.http.post<any>("https://localhost:44367/AddDemand?Medicine="+demand.Medicine+"&Demand="+demand.Demand,demand)
  }
  addsupply(supply:Supplies){
    return this.http.post("https://localhost:44367/AddSupply?DemandId=0&Medicine="+supply.Medicine+"&Demand="+supply.Demand,supply);
  }
  getsupplies(demand:Demand):Observable<Supplydata[]>{
    return this.http.get<Supplydata[]>("https://localhost:44358/api/MedicineSupply/GetSupplies/"+demand.Medicine+"/"+demand.Demand);
  }
}
