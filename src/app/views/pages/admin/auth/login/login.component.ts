import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router, ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminauthService } from 'src/app/appservice/admin/adminauth.service';
import { CommonService } from 'src/app/appservice/common/common.service';
import { SessionService } from 'src/app/appservice/session/session.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  pattern="^[A-Z][a-z]+$";

  constructor(private router: Router,
    private toastr: ToastrService,
    private auth: AdminauthService,
    private common: CommonService,
    private session: SessionService
    ) { }

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.pattern(this.pattern)]),
    password: new FormControl('', [Validators.required,])
  });


  ngOnInit(): void {
  }

  get v(){
    return this.loginForm.controls
  }
  
  loginUser(){
    // if (this.loginForm.value.username == "User" && this.loginForm.value.password == 'saguna123') {
    //   // this.router.navigate(['/pages/adminView']);
    //   this.toastr.success("Login Successfully")
    // }
    //  if(this.loginForm.value.username == "Admin" && this.loginForm.value.password == "saguna123"){
    //   this.router.navigate(['/pages/adminView']);
    //   this.toastr.success("Login Successfully")
    // }
    try{
    if(this.loginForm.valid){
      this.auth.adminLogin(this.loginForm.value.username, this.loginForm.value.password)
      console.log(this.loginForm.value)
      
    }
    else{
      this.toastr.error("Enter Valid Login Credentials")
      this.loginForm.markAllAsTouched();
    }
  }
    catch(error){
      throw this.common.handleError(error,this.session,this.toastr);
    }
  }

}