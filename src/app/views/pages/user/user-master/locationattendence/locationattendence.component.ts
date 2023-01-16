import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AdminmasterService } from 'src/app/appservice/admin/adminmaster.service';
import { CommonService } from 'src/app/appservice/common/common.service';
import { GenericService } from 'src/app/appservice/common/generic.service';
import { SessionService } from 'src/app/appservice/session/session.service';
import { UsermasterService } from 'src/app/appservice/user/usermaster.service';
import { MENU } from 'src/app/views/layout/sidebar/menu';
import { USERMENU } from 'src/app/views/layout/sidebar/menu-user';
import { EmployeeAction } from './locationattendence.component.model';

@Component({
  selector: 'app-locationattendence',
  templateUrl: './locationattendence.component.html',
  styleUrls: ['./locationattendence.component.scss']
})


export class LocationattendenceComponent implements OnInit {
  sec: any
  time: any
  lat: any
  lng: any
  map: any
  min: any
  punchIntime: any
  punchinHours: any
  punchOuttime: any
  punchOutHours: any
  punchIntimeLocation: any
  latpunch: any
  lngpunch: any
  mapsURL: any
  logout: boolean = false

  showloggedin: boolean = true
  showloggedOut: boolean = false
  employeeAction = new EmployeeAction()
  getDate = new Date()
  todayDate: any
  addressIn: any
  addressOut: any
  currentDate: any
  weekDays = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  day: any
  comma: any
  colon: any
  username: any
  todayattendence: any
  emptodayattendence = []
  getseconds: any
  Newtime = new Date()
  progressbar: any





  Punchbtn: any
  punchin: boolean = true
  punchintime: any;
  punchouttime: any;
  punchtiming: any;
  Email: any;

  constructor(private http: HttpClient, private common: CommonService,
    private adminmaster: AdminmasterService, private session: SessionService,
    private usermaster: UsermasterService,
    private generic: GenericService) {
    let date = new Date()
    let time = date.getHours()
    let min = date.getMinutes()
    this.sec = date.getSeconds()
    this.time = time
    this.min = min

    // this.getTodayattendence()
  }

  ngOnInit() {
    this.Punchbtn = 'Punch In'
    this.Email = this.session.getsession('Username');
    this.getTodaydate();
    this.GetCurrentLocation();
    this.getdata();
    // this.generic.spinnerShow();
    // this.findAddress()
  }

  getTodaydate() {
    // const date = new Date()
    // let day = date.getDate()
    // let month = date.getMonth() + 1
    // let year = date.getFullYear()
    // this.currentDate = `${day}-${month}-${year}`
    // console.log(this.currentDate)
    setInterval(() => {
      this.Newtime = new Date()
    }, 1000)
  }

  Timer() {
    debugger
    if (this.Punchbtn == 'Punch Out') {
      this.generic.spinnerShow();
      this.Punchbtn = 'Punch In'
      this.punchouttime = this.Newtime

      const header = new HttpHeaders()
      header.append('Content-Type', 'application/json')
      let url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${this.lat}&lon=${this.lng}&bounded=1`
      this.http.get(url).subscribe((res: any) => {
        console.log(res)
        let display = res.display_name
        let address_out = res.display_name
        console.log(display)

        const params = {
          punchout: this.punchouttime,
          email: this.Email,
          punchoutlocation: address_out
        }
        console.log(params)

        if (this.punchouttime && this.Email && address_out != undefined) {
          alert('success')
          this.usermaster.PunchInAttendance(params)
        }
        else {
          alert('error')
        }


      })

    }
    else {
      this.Punchbtn = 'Punch Out'
      this.generic.spinnerShow();
      this.punchintime = this.Newtime

      const header = new HttpHeaders()
      header.append('Content-Type', 'application/json')
      let url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${this.lat}&lon=${this.lng}&bounded=1`
      this.http.get(url).subscribe((res: any) => {
        console.log(res)
        let display = res.display_name
        let address_in = res.display_name
        console.log(display)

        const params = {
          punchin: this.punchintime,
          email: this.Email,
          PunchInLocation: address_in
        }

        console.log(params)

        if (this.punchintime && this.Email && address_in != undefined) {
          alert('success')
          this.usermaster.PunchInAttendance(params)
        }
        else {
          alert('error')
        }

      })
    }


  }



  getdata() {
    debugger
    this.usermaster.getAttendance().subscribe({
      next(list: any) {
        fetchData(list)
      }
    })
    const fetchData = (list: any) => {
      console.log(list)

      var abc = list.body.ResultSets[0][0].PunchIn
      console.log(abc)

      var date = new Date(abc);
      this.punchtiming = date.toString()
      this.addressIn = list.body.ResultSets[0][0].PunchInLocation
    }

  }

  GetCurrentLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.ShowLocation(position, this.map);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }

  }

  ShowLocation(position: any, map: any): void {
    this.lng = +position.coords.longitude;
    this.lat = +position.coords.latitude;
    console.log('lang:' + this.lng, "lat:" + this.lat);
  }


  // getTime() {
  //   this.logout = true
  //   this.login = false
  //   this.mapsURL = `https://maps.google.com/maps?q=${this.lat}%20${this.lng}&t=&z=17&ie=UTF8&iwloc=&output=embed`
  //   this.latpunch = this.lng
  //   this.lngpunch = this.lat
  //   let date = new Date()
  //   this.todayDate = new Date()
  //   this.punchIntime = date.getHours()
  //   this.punchinHours = date.getMinutes()
  //   let days = this.weekDays[date.getDay()]
  //   this.day = days
  //   this.comma = ","
  //   this.colon = ":"
  //   this.showloggedin = true
  //   this.showloggedOut = false
  //   this.findAddress()
  //   //  this.update() 
  //   // this.postEmployeeData()
  // }

  // getLogouttime() {
  //   this.login = true
  //   this.logout = false
  //   this.showloggedin = false
  //   this.showloggedOut = true
  //   this.mapsURL = `https://maps.google.com/maps?q=${this.lat}%20${this.lng}&t=&z=16&ie=UTF8&iwloc=&output=embed&`
  //   this.latpunch = this.lng
  //   this.lngpunch = this.lat
  //   let date = new Date()
  //   this.punchOuttime = date.getHours()
  //   this.punchOutHours = date.getMinutes()
  //   this.findAddress()
  //   this.postEmployeeData()
  // }

  // findAddress() {
  //   const header = new HttpHeaders()
  //   header.append('Content-Type', 'application/json')
  //   let url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${this.lat}&lon=${this.lng}&bounded=1`
  //   this.http.get(url).subscribe((res: any) => {
  //   console.log(res)
  //   let display = res.display_name
  //   this.addressIn = res.display_name
  //   this.addressOut = display
  //   console.log(display)
  //   })
  // }

  // postEmployeeData() {
  //   this.http.get<any>("http://localhost:3000/Signup").subscribe((res: any) => {
  //     // console.log(res)
  //     console.log(res)
  //     let employeeUsername = this.session.getsession('Username')
  //     console.log(employeeUsername)
  //     this.employeeAction.employeeStatus = "Present"
  //     this.employeeAction.date = this.currentDate
  //     this.employeeAction.employeeUsername = employeeUsername
  //     this.employeeAction.employeeLogintime = this.punchIntime + ":" + this.punchinHours
  //     this.employeeAction.employeeLogouttime = this.punchOuttime + ":" + this.punchOutHours
  //     this.adminmaster.getEmpattendence(this.employeeAction).subscribe((res: any) => {
  //       // console.log(res);
  //     }
  //     )
  //   })
  // }

  // getTodayattendence() {
  //   this.http.get<any>("http://localhost:3000/attendceData").subscribe((res: any) => {
  //     let empData = res
  //     // console.log(empData)
  //     this.emptodayattendence = empData
  //   })
  // }


  // ngOnDestroy() {
  //   // let path =location.href.slice(location.href.lastIndexOf('/'),location.href.length)

  //   // if(path=='/location'){
  //   // if(USERMENU[0].label=="Attendence (Employee)"){
  //   //   this.session.clearallsessionandlocal();
  //   // }
  //   this.session.clearallsessionandlocal();
  // }

  // stop() {
  //   let path = location.href.slice(location.href.lastIndexOf('/'), location.href.length)

  //   if (path == '/userlogin') {
  //     if (USERMENU[0].label == "Attendence (Employee)") {
  //       this.ngOnDestroy();
  //     }
  //   }
  // }


}