import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Demand } from 'src/app/models/demand';
import { Supplies } from 'src/app/models/supplies';
import { Supplydata } from 'src/app/models/supplydata';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-demandmedicine',
  templateUrl: './demandmedicine.component.html',
  styleUrls: ['./demandmedicine.component.css']
})
export class DemandmedicineComponent implements OnInit {

  qty!:number;
  d:Demand=new Demand();
  s:Supplies=new Supplies();
  constructor(private userser:UserService,private router:Router) { }

  ngOnInit(): void {
  }
  order(name:string){
    console.log(name,this.qty);
    this.d.Medicine=name;
    this.d.Demand=this.qty;
    this.s.Medicine=name;
    this.s.Demand=this.qty;
    this.userser.adddemand(this.d).subscribe(d=>{
    if(d.message=="demand is added"){
      this.userser.addsupply(this.s).subscribe(da=>{
        console.log("supply added")
        this.router.navigate(["/supplies",name,this.qty])
      })
    }
    })
  }
}
