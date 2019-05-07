import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: []
})
export class RegistrationComponent implements OnInit {

  constructor(public service: UserService,private toastr:ToastrService) { }

  ngOnInit() {
    this.service.formModel.reset();
  }
  onSubmit(){
    this.service.register().subscribe(
      res=>{
        console.log(res);
        this.service.formModel.reset();
        this.toastr.success('Usuario Creado!','Registro Exitoso.');
      },
      err => {
        this.toastr.error('Usuario no creado!','registro fallido.');
        console.log(err);
      }
    );
  }

}
