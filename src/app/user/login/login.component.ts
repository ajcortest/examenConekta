import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  formModel = {
    email: '',
    password: ''
  }
  constructor(private service:UserService, private router:Router,private toastr:ToastrService) { }

  ngOnInit() {
    if(localStorage.getItem('token')!=null){
      this.router.navigateByUrl('/home');
    }
  }
  onSubmit(form:NgForm){
    localStorage.setItem('token','55566677');
    localStorage.setItem('userId',"1");
    this.router.navigateByUrl('/home');
    /*this.service.login(form.value).subscribe(
      (res:any)=>{
        localStorage.setItem('token',res.token);
        localStorage.setItem('userId',"1");
        this.router.navigateByUrl('/home');
      },
      err=>{
          if(err.status == 400){
            this.toastr.error('Email o password es inválido.','Autenticación Fallida')
          }
          else if(err.status == 0){
            this.toastr.error('Servicio no disponible','Autenticación Fallida')
          }
          else{
            this.toastr.error(err.status,'Autenticación Fallida')
          }
      }
    );*/
  }
}
