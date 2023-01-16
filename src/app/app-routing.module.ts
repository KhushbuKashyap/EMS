import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './views/layout/base/base.component';
// import { AuthGuard } from './core/guard/auth.guard';
// import { ErrorPageComponent } from './views/pages/error-page/error-page.component';


const routes: Routes = [
  { path:'', loadChildren: () => import('./views/pages/user/user-auth/user-auth.module').then(m => m.UserAuthModule) },
  { path:'admin', loadChildren: () => import('./views/pages/admin/auth/adminauth.module').then(m => m.AdminAuthModule) },
  {
    path: 'base',component: BaseComponent, children: [ 
      {
        path: 'admin-pages',
        loadChildren: () => import('./views/pages/admin/master/adminmaster.module').then(m => m.AdminMasterModule)
      },    
      {
        path: 'user-pages',
        loadChildren: () => import('./views/pages/user/user-master/user-master.module').then(m => m.UserMasterModule)
      },    
      // { path: 'userlogin', redirectTo: '', pathMatch: 'full' }, 
      // { path: '**', redirectTo: 'login', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
