import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb:FormBuilder, private http: HttpClient) { }
  readonly BaseURI ='https://jsonplaceholder.typicode.com';
  formModel = this.fb.group({
    Email:['',[Validators.required,Validators.email]],
    Passwords : this.fb.group({
      Password:['',[Validators.required,Validators.minLength(4)]],
      ConfirmPasword : ['',Validators.required]
    },{validators:this.comparePasswords})
  });

  comparePasswords(fb:FormGroup){
    let confirmPswrdCtrl = fb.get('ConfirmPasword')
    //PasswordMismatch
    //confirmPswrdCtrl.error={passwordMismatch:true}
    if(confirmPswrdCtrl.errors == null || 'PasswordMismatch' in confirmPswrdCtrl.errors){
      if(fb.get('Password').value != confirmPswrdCtrl.value){
        confirmPswrdCtrl.setErrors({passwordMismatch:true});
        
      }else{
        confirmPswrdCtrl.setErrors(null);
      }
    }
  }
  register(){
    var body ={
      email : this.formModel.value.Email,
      password : this.formModel.value.Passwords.Password
    };
    return this.http.post(this.BaseURI+'/api/register',body);
  }
  login(formData){
    return this.http.post(this.BaseURI+'/api/login',formData);
  }
  getUser(id){
    return this.http.get(this.BaseURI+'/users/'+id);
  }
}
