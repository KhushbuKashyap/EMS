import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserAuthComponent } from './userauth.component';

const routes: Routes = [
  {
    path: '',
    component: UserAuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'userlogin',
        pathMatch: 'full'
      },
      {
        path: 'userlogin',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent
      },
    ]
  }
]
@NgModule({
  declarations: [LoginComponent, RegisterComponent,UserAuthComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class UserAuthModule { }
