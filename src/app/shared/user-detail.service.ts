import { Injectable } from '@angular/core';
import { UserDetail } from './user-detail.model';
import {HttpClient} from "@angular/common/http"
import { Users } from './users.model';

@Injectable({
  providedIn: 'root'
})
export class UserDetailService {
  private modals: any[] = [];
  formData:UserDetail
  constructor(private http:HttpClient) { }
  readonly BaseURI ='https://jsonplaceholder.typicode.com';
  list : Users[];

  postUserDetail(formData:UserDetail){
    return this.http.post(this.BaseURI + "/users", formData)
  }
  refreshList(){
    this.http.get(this.BaseURI + "/users")
    .toPromise()
    .then((res:any) => {
      this.list = res as Users[];
    });
  }
  getUser(id){
    return this.http.get(this.BaseURI + "/users/"+ id)
  }
}
