import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserService } from './shared/user.service';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { ResourcesComponent } from './resources/resources.component';
import {UserDetailService} from './shared/user-detail.service';
import {ResourcesService} from './shared/resources.service';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserDetailComponent } from './user-details/user-detail/user-detail.component';
import { UserDetailListComponent } from './user-details/user-detail-list/user-detail-list.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination';
import { TestBed } from '@angular/core/testing';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    ResourcesComponent,
    UserDetailsComponent,
    UserDetailComponent,
    UserDetailListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      progressBar: true
    }),
    FormsModule,
    NgbModule.forRoot(),
    NgxPaginationModule
  ],
  providers: [UserService,ResourcesService,UserDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
