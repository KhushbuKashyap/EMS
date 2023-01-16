import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CommonService } from '../common/common.service';
import { GenericService } from '../common/generic.service';
import { SessionService } from '../session/session.service';

@Injectable({
  providedIn: 'root'
})
export class UserauthService {


  response: any

  constructor(
    private toastr: ToastrService,
    private generic: GenericService,
    private session: SessionService,
    private router: Router,
    private common: CommonService,
    private http : HttpClient
  ) {}



  userregister(record){
    try {
     const params = {
      EmployeeName : record.EmployeeName,
      Email : record.Email,
      Password: record.Password,
      ConfrmPassword: record.ConfrmPassword
     }
      const sp = "SP_UserRegister"
      this.generic.postwithparam(sp, params).subscribe((res)=>{
        console.log(res)
        if(res.body.ResultSets[0][0].message =='Registered Successfully'){
          this.toastr.success('Registered Successfully');
          this.router.navigate(['/userlogin'])
        }
        else{
          this.toastr.error('Failed!')
        }
      })
      } catch (error) {
        throw this.common.handleError(error, this.session, this.toastr)
    }
  }

  EmpUserLogin(record){
    try {
        const params = {
        Email : record.email,
        Password : record.Password   
      }
      const sp = "SP_UserLogin"
      this.generic.postwithparam(sp, params).subscribe((res)=>{
        console.log(res)
        if(res.body.ResultSets[0][0].message=='User Logged In Successfully'){
          this.toastr.success('Employee Logged In Successfully')
          this.router.navigate(['/base/user-pages/location'])
          // console.log(res.body.ResultSets[0][0].Email)
          let mail = res.body.ResultSets[0][0].Email
          this.session.setsession('Username', mail);
          console.log(mail) 
        }
        else {
          this.toastr.error("Invalid Username and Password")
        }
      })
      return this.generic.postwithparam(sp, params)
    } catch (error) {
      throw this.common.handleError(error, this.session, this.toastr)
      
    }
   
  }

}
