import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminauthService } from 'src/app/appservice/admin/adminauth.service';
import { CommonService } from 'src/app/appservice/common/common.service';
import { SessionService } from 'src/app/appservice/session/session.service';
import { UserauthService } from 'src/app/appservice/user/userauth.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
    private toastr: ToastrService,
    private auth: AdminauthService,
    private common: CommonService,
    private session: SessionService,
    private authuser: UserauthService,
    private http: HttpClient,
    private fb: FormBuilder,
  ) { }

  loginForm = new FormGroup({
    email: new FormControl(''),
    Password: new FormControl(''),
    })

  submitted: boolean = false
  response: any
  resMessage:any

  ngOnInit(): void {
    this.loginForm = this.fb.group({
    email:['',[Validators.required, Validators.email]],
    Password: ['',[Validators.required]]
   })

  //  this.redirect();
  
   
  }

  get user() {
    
    return this.loginForm.controls
  }

  loginUser(){
    this.submitted = true
    try {
      if (this.loginForm.valid) {
        this.authuser.EmpUserLogin(this.loginForm.value)
      }
      else{
        this.toastr.error("Fill the form")
      }
    } catch (error) {
      throw this.common.handleError(error, this.session, this.toastr);
    }
  }

  // redirect(){
  //   let path = location.href.slice(location.href.lastIndexOf('/'), location.href.length)

  //   if (path == '/base/user-pages/location') {
  //     console.log(path)
  //       this.router.navigate(['/userlogin'])
  //   }
  // }


  onRegister() {
    this.router.navigate(['/register'])
  }

  backtoRegister(){
    this.router.navigate(['/register'])
  }
 
}
