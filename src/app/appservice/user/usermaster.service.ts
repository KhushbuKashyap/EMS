import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from '../common/common.service';
import { GenericService } from '../common/generic.service';
import { SessionService } from '../session/session.service';

@Injectable({
  providedIn: 'root'
})
export class UsermasterService {

  constructor(
    private session: SessionService,
    private common: CommonService,
    private toastr: ToastrService,
    private generic: GenericService
  ) { }


  PunchInAttendance(params){
    debugger
    try {
      const sp = 'SP_EmpAttendance';
      this.generic.spinnerShow();
      this.generic.postwithparam(sp,params).subscribe((res)=>{
        console.log(res)
        this.generic.spinnerhide();
      })
    } 
    catch (error) {
      throw this.common.handleError(error, this.session, this.toastr)
    }

  }


  getAttendance(){
    debugger
    
    try {
      const param = {
        Action: 2
      }
      const sp = 'SP_GetAttendanceForAdmin';
      return this.generic.postwithparam(sp,param)
    } 
    catch (error) {
      throw this.common.handleError(error, this.session, this.toastr)
    }
  }
}
