import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { ResourcesComponent } from './resources/resources.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserDetailComponent } from './user-details/user-detail/user-detail.component';
import { UserDetailListComponent } from './user-details/user-detail-list/user-detail-list.component';

const routes: Routes = [
  {path:'',redirectTo:'/user/login',pathMatch:'full'},
  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'registration', component: RegistrationComponent },                                                                                                                     
      { path: 'login', component: LoginComponent }

    ]
  },
  {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'userdetails',component:UserDetailsComponent,canActivate:[AuthGuard]},
  {path:'userdetail',component:UserDetailComponent,canActivate:[AuthGuard]},
  {path:'userdetaillist',component:UserDetailListComponent,canActivate:[AuthGuard]},

  {path:'resources',component:ResourcesComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }