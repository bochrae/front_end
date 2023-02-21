import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {
  
  username:string | undefined;
  password:string | undefined;
 
 

  constructor(private router: Router) {}

  ngOnInit() {
    this.router = new Router();
  }
  LoginUser()
  {
    if(this.username =="Admin" && this.password=="admin123")
    {
      console.log("Welcome");
      this.router.navigate(['create-employee']);
    }
    else if(this.username =="Manager" && this.password=="manager123"){
      console.log("welcome manager");
      this.router.navigate(['userlist']);
    }
  
  }

}
