import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit{
  id!: number;
  user!: User;
  constructor(private route: ActivatedRoute, private userservice: UserserviceService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.user = new User();
    this.userservice.getUserById(this.id).subscribe( data => {
      this.user = data;
    });
  }


}
