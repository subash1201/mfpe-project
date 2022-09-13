import { Component, OnInit } from '@angular/core';
import { Meetlist } from 'src/app/models/meetlist';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-meetinglist',
  templateUrl: './meetinglist.component.html',
  styleUrls: ['./meetinglist.component.css']
})
export class MeetinglistComponent implements OnInit {
  date!:string;
  msg!:string;
  list:Meetlist[]=[]
  constructor(private service:UserService) { }

  ngOnInit(): void {
  }
  generatelist(){
    this.msg="data loading";
    this.service.getmeetlist(this.date).subscribe(data=>{
      this.list=data;
    })
    this.msg="";
  }
}
