import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminmasterService {

  constructor(
    private http: HttpClient
  ) { }

  getEmpattendence(data: any)  {
    return this.http.post<any>("http://localhost:3000/attendceData", data)
      .pipe(map((res: any) => {
        return console.log(res)
      }
    ))
  }
}
