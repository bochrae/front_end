import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent {
  users!: User[];

  constructor(private userservice: UserserviceService,
    private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers(){
    this.userservice.getUsersList().subscribe(data => {
      this.users = data;
    });
  }

  userDetails(id: number){
    this.router.navigate(['employee-details', id]);
  }

  updateUser(id: number){
    this.router.navigate(['update-user', id]);
  }

  deleteUser(id: number){
    this.userservice.deleteUser(id).subscribe( data => {
      console.log(data);
      this.getUsers();
    })
  }

}
