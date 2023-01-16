import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AdminGuardService } from "src/app/appservice/admin/admin-guard.service";
import { UserGuardService } from "src/app/appservice/user/user-guard.service";
import { LayoutModule } from "src/app/views/layout/layout.module";
import { AdminMasterComponent } from "./adminmaster.component";
import { AdminviewComponent } from "./adminview/adminview.component";
import { EmployeestatisticsComponent } from "./employeestatistics/employeestatistics.component";
import { TodayattendenceComponent } from "./todayattendence/todayattendence.component";


const routes: Routes = [
  {
    path: '',
    component: AdminMasterComponent,
    children: [
      {
        path: 'adminView',
        component: AdminviewComponent,
        canActivate: [AdminGuardService],
      },

      {
        path: 'todayAttendence',
        component: TodayattendenceComponent,
        canActivate: [AdminGuardService]
      },
      {
        path: 'employeeStatistics',
        component: EmployeestatisticsComponent,
        canActivate: [AdminGuardService]
      }

    ]
  }
      
]


@NgModule({
  declarations: [
    AdminMasterComponent,
    AdminviewComponent,
    EmployeestatisticsComponent,
    TodayattendenceComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})


export class AdminMasterModule { }