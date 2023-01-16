import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserMasterComponent } from './user-master.component';
import { LocationattendenceComponent } from './locationattendence/locationattendence.component';
import { UserGuardService } from 'src/app/appservice/user/user-guard.service';
import { UsersholidayComponent } from './usersholiday/usersholiday.component';
import { AttendanceInfoComponent } from './attendance-info/attendance-info.component';
import { UserleaveComponent } from './userleave/userleave.component';

const routes: Routes = [
  {
    path: '',
    component: UserMasterComponent,
    children: [
      {
        path: 'location',
        component: LocationattendenceComponent,
        canActivate: [UserGuardService],
        canDeactivate:[UserGuardService]
      },
      {
        path: 'holiday',
        component: UsersholidayComponent,
        canActivate: [UserGuardService],
        canDeactivate:[UserGuardService]
      },
      {
        path: 'leave',
        component: UserleaveComponent,
        canActivate: [UserGuardService],
        canDeactivate:[UserGuardService]
      },
    ]
  }
      
]

@NgModule({
  declarations: [LocationattendenceComponent, UserMasterComponent, UsersholidayComponent, UserleaveComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    // NgxSpinnerModule
  ]
})
export class UserMasterModule { }
