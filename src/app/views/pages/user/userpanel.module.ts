import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { NgxSpinnerModule } from "ngx-spinner";
import { UserGuardService } from "src/app/appservice/user/user-guard.service";
import { FeahterIconModule } from "src/app/core/feather-icon/feather-icon.module";
import { LayoutModule } from "../../layout/layout.module";
import { LoginComponent } from "./user-auth/login/login.component";
import { RegisterComponent } from "./user-auth/register/register.component";
import { UserAuthModule } from "./user-auth/user-auth.module";
import { UserAuthComponent } from "./user-auth/userauth.component";
import { UserMasterComponent } from "./user-master/user-master.component";
import { UserMasterModule } from "./user-master/user-master.module";



const routes: Routes = [
    // {
    //     path: '',
    //     component: UserAuthComponent,
    //     children: [
    //     //   {
    //     //     path: '',
    //     //     redirectTo: '/auth/login',
    //     //     pathMatch: 'full'
    //     //   },
    //       {
    //         path: 'userlogin',
    //         component: LoginComponent
    //       },
    //       {
    //         path: 'register',
    //         component: RegisterComponent,
    //         canActivate: [UserGuardService]
    //       },
    //     ]
    //   },
]


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        UserAuthModule,
        UserMasterModule,
        LayoutModule,
        FeahterIconModule
        // RouterModule.forChild(routes)
    ]
})


export class UserPanelModule { }