import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/appservice/session/session.service';
import { UsermasterService } from 'src/app/appservice/user/usermaster.service';

@Component({
  selector: 'app-todayattendence',
  templateUrl: './todayattendence.component.html',
  styleUrls: ['./todayattendence.component.scss']
})
export class TodayattendenceComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private router: Router,
    private usermaster: UsermasterService,
    private session: SessionService
  ) { }

  todayattendence = [];
  EmpName: any;
  upd: any;

  ngOnInit(): void {
    this.geTodayattendence()
  }
  geTodayattendence() {
    // this.http.get<any>("http://localhost:3000/attendceData").subscribe((res:any)=>{
    //   let empData = res
    //   console.log(empData)
    //   this.todayattendence = empData
    //  })

    this.usermaster.getAttendance().subscribe((res)=>{
      console.log(res)
      this.todayattendence=res.body.ResultSets[0]
    })
  }

  getEmployeeDetails(name:any) {
    const param = {
      emp_name: name.empname
    }
    console.log(param)
          this.router.navigate(['/base/user-pages/attendanceinfo'])
  }

}
