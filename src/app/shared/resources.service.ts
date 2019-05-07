import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  constructor(private fb:FormBuilder, private http: HttpClient) { }
  readonly BaseURI ='https://reqres.in'
}
