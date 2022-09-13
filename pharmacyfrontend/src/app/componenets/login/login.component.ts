import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user!:string;
  password!:string;
  user1:User=new User()
  constructor(private userser:UserService,private router:Router) { }

  ngOnInit(): void {
    
  }
  LoginUser()
  {
    if(this.user =="admin" && this.password=="admin")
    {
      console.log("Success");
    }
    if(this.user =="admin2" && this.password=="admin2")
    {
      console.log("Success");
    }
    this.userser.validateuser(this.user1).subscribe(data=>{
      if(data.tokenString!=null){
        this.router.navigate(['/dashboard']);
      }
    },error=>{
      window.alert("incorrect credentials")
    })
  }

}
