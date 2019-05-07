import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './shared/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  Datauser = new DataUser();
  constructor(private service:UserService, private router:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
    if(localStorage.getItem('token')!=null){
      
      this.service.getUser(localStorage.getItem('userId')).subscribe(
        (res:any)=>{
          this.Datauser = res;
        },
        err=> {
            console.log(err);
        }
      );
    }
    else{
      this.router.navigateByUrl('/home');
    }
  }
  onLogout(){
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    this.router.navigate(['/user/login']);
  }
  openMenu(menu){
    this.router.navigateByUrl('/'+menu);
  }
}
class DataUser {
  id: null;
  name: null;
  username:null;
  avatar : null;
}