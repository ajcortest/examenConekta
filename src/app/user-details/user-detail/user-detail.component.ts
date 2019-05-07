import { Component, OnInit } from '@angular/core';
import { UserDetailService } from 'src/app/shared/user-detail.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styles: []
})
export class UserDetailComponent implements OnInit {

  constructor(public service:UserDetailService,private toastr:ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?:NgForm){
    if(form!= null)
      form.resetForm();
    this.service.formData = {
      id:0,
      name : '',
      email: '',
      username:''
    }
  }
  onSubmit(form:NgForm)
  {
    this.service.postUserDetail(form.value).subscribe(
      res=>{
        this.resetForm(form);
        this.toastr.success('Usuario Creado!','Registro Exitoso.');
      },
      err=>{
        console.log(err);
        this.toastr.error('Usuario no creado!','registro fallido.');
      }
    )
  }

}
