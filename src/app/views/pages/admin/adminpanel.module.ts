import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { ArchwizardModule } from "angular-archwizard";
import { CKEditorModule } from "ngx-ckeditor";
import { QuillModule } from "ngx-quill";
import { FeahterIconModule } from "src/app/core/feather-icon/feather-icon.module";
import { LayoutModule } from "../../layout/layout.module";
import { AdminAuthModule } from "./auth/adminauth.module";
import { AuthComponent } from "./auth/auth.component";
import { LoginComponent } from "./auth/login/login.component";
import { AdminMasterModule } from "./master/adminmaster.module";


// const routes: Routes = [
//     {
//         path: '',
//         component: AuthComponent,
//         children: [
//           {
//             path: '',
//             redirectTo: '/admin/login',
//             pathMatch: 'full'
//           },
//           {
//             path: 'login',
//             component: LoginComponent
//           },
//         ]
//       },
//     // {
//     //     path: '',
//     //     children: [
//     //         {
//     //             path: 'adminView',
//     //             component: AdminviewComponent,
//     //         },
//     //         {
//     //             path: 'location',
//     //             component: LocationattendenceComponent,
//     //         },

//     //         {
//     //             path: 'todayAttendence',
//     //             component: TodayattendenceComponent,
//     //         },
//     //         {
//     //             path: 'employeeStatistics',
//     //             component: EmployeestatisticsComponent,
//     //         },
//     //         {
//     //             path: 'attendanceinfo',
//     //             component: AttendanceInfoComponent,
//     //         },]
//     // },
// ]

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FormsModule,
        CKEditorModule,
        ReactiveFormsModule,
        AdminAuthModule,
        AdminMasterModule,
        LayoutModule,
        FeahterIconModule,
        // RouterModule.forChild(routes),
        QuillModule.forRoot(), // ngx-quill
        ArchwizardModule, // angular-archwizard
    ]
})


export class AdminPanelModule { }