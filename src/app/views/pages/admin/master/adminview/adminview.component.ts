import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/appservice/common/common.service';

@Component({
  selector: 'app-adminview',
  templateUrl: './adminview.component.html',
  styleUrls: ['./adminview.component.scss']
})
export class AdminviewComponent implements OnInit {

  todayDate =  new Date()

  employeeData:[
    {
    id: '',
    date: '',
    // name: "sahil",
    employeeLogintime: '',
    employeeLogouttime: ''
}
]

arr:number = 31;
days = []

  constructor(private service: CommonService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getemployeeData()
    for (let i = 0; i < this.arr; i++) {
    this.days.push(i)
   }
  }

  getemployeeData(){
    this.http.get<any>("http://localhost:3000/attendceData").subscribe((res:any)=>{
      let empData = res
      console.log(empData)
      this.employeeData = empData
     })
  }

  

}
