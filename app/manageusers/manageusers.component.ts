import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-manageusers',
  templateUrl: './manageusers.component.html',
  styleUrls: ['./manageusers.component.css']
})
export class ManageusersComponent {
  user: User = new User();
  constructor(private userservice: UserserviceService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveUser(){
    this.userservice.createUser(this.user).subscribe( data =>{
      console.log(data);
      this.goToUserList();
    },
    error => console.log(error));
  }

  goToUserList(){
    this.router.navigate(['/users']);
  }
  
  onSubmit(){
    console.log(this.user);
    this.saveUser();
  }

}
