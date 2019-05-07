import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styles: []
})
export class ResourcesComponent implements OnInit {

  constructor(private service:UserService, private router:Router,private toastr:ToastrService) { }

  ngOnInit() {
    if(localStorage.getItem('token')!=null){
      this.router.navigateByUrl('/home');
    }
  }
}
