import { Component, OnInit } from '@angular/core';
import { UserDetailService } from '../shared/user-detail.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styles: []
})
export class UserDetailsComponent implements OnInit {

  constructor(private service:UserDetailService, private router:Router) { }

  ngOnInit() {
    /*if(localStorage.getItem('token')==null){
      this.router.navigateByUrl('/home');
    }]*/
  }

}
