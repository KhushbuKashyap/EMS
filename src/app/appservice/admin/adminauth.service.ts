import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from '../common/common.service';
import { GenericService } from '../common/generic.service';
import { SessionService } from '../session/session.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class  AdminauthService {
  response: any;

  constructor(
    private toastr: ToastrService,
    private generic: GenericService,
    private session: SessionService,
    private router: Router,
    private common: CommonService
  ) { }

  adminLogin(username: any, password: any){
    try{
      const params = {
        Username : username,
        Password : password
      }
      const sp = 'SP_AdminLogin';
     
      // this.generic.spinnershow();
      this.generic.postwithparam(sp,params).subscribe((res)=>{
        console.log(res)
        this.response= res.body.ResultSets[0][0];          
        if(this.response.status == 1){          
        this.session.setsession('Username', this.response.Ad_Username);
        // this.session.setsession('UserId',this.response.pkUserId);
        this.toastr.success(this.response.message);
        // this.router.navigate(['/pages/adminView']);
        this.router.navigate(['/base/admin-pages/adminView']);
        
        }else if (res.body.ResultSets[0][0].message == 'Login Failed!') {
          this.toastr.error('Invalid Username And Password');
        }
        else{
          this.toastr.error('Invalid Username And Password')
        }
      })
    }
    catch(error){
      throw this.common.handleError(error, this.session, this.toastr)
    }
  }
  
}
