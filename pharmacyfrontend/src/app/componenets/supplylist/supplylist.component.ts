import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Demand } from 'src/app/models/demand';
import { Supplydata } from 'src/app/models/supplydata';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-supplylist',
  templateUrl: './supplylist.component.html',
  styleUrls: ['./supplylist.component.css']
})
export class SupplylistComponent implements OnInit {

  d:Demand=new Demand();
  supdata:Supplydata[]=[]
  constructor(private route:ActivatedRoute,private userser:UserService) { }


  ngOnInit(): void {
    this.d.Medicine=this.route.snapshot.params["name"]
    this.d.Demand=this.route.snapshot.params["count"]
    this.userser.getsupplies(this.d).subscribe(data=>{
      console.log(data);
      this.supdata=data
    })
  }

}
