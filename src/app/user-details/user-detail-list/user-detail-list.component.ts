import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserDetailService } from 'src/app/shared/user-detail.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserDetail } from 'src/app/shared/user-detail.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-detail-list',
  templateUrl: './user-detail-list.component.html',
  styles: []
})
export class UserDetailListComponent implements OnInit {
  UserDetail = new UserDetail();
  constructor( private router:Router,private toastr:ToastrService, public service: UserDetailService,config: NgbModalConfig,private modalService: NgbModal ) { 
     // customize default values of modals used by this component tree
     config.backdrop = 'static';
     config.keyboard = false;
  }
  pageActual:number = 1;
  ngOnInit() {
    
    this.service.refreshList();
  }
  open(content,pd) {
    this.service.getUser(pd.id).subscribe(
      (res:any)=>{
        this.UserDetail = res;
        this.modalService.open(content);
      },
      err => {
        this.toastr.error('Usuario no creado!','registro fallido.');
        console.log(err);
      }
    );
  }
  populateForm(pd:UserDetail):void{ 
    this.service.formData = Object.assign({},pd);
  }
  delete(pd) {
    this.service.deletetUser(pd.id).subscribe(
      (res:any)=>{
        this.toastr.success('Eliminación correcta!','Registro Exitoso..');
        this.service.refreshList();        
      },
      err => {
        this.toastr.error('Error','registro fallido.');
        console.log(err);
      }
    );
  }

}
