import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { SessionService } from '../session/session.service';
import { CommonService } from './common.service';
import { catchError, map } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class GenericService {
  url: string;
  host: string;


  constructor(
    private http: HttpClient,
    private common: CommonService,
    private session: SessionService,
    private toast: ToastrService,
    private spinner: NgxSpinnerService

  ) { 
    this.host = this.common.GetHost()
  }

  spinnerShow(){
    this.spinner.show();
  }

  spinnerhide(){
    this.spinner.hide();
  }

  postwithparam(sp: any,params:any): Observable<any> {
    try { 
      this.url = this.host + sp;
      const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
        observe: 'response' as 'response'
      }
      return this.http.post<any>(this.url, params, httpOptions).pipe(map((data: any) => {
         
        if (data.status == 200) {
        //  this.spinnerhide()
          return data
        }
      }), catchError((error) => {
         
      //  this.spinnerhide()
        throw this.common.handleError(error, this.session, this.toast)
      }))
    } catch (error) {
      throw this.common.handleError(error, this.session, this.toast)
    }
  }


}
