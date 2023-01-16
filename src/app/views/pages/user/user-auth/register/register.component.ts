import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminauthService } from 'src/app/appservice/admin/adminauth.service';
import { CommonService } from 'src/app/appservice/common/common.service';
import { SessionService } from 'src/app/appservice/session/session.service';
import { environment } from 'src/environments/environment';
import { UserauthService } from 'src/app/appservice/user/userauth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

 

  constructor(private router : Router, private toastr: ToastrService,
    private fb: FormBuilder,
    private http : HttpClient,
    private auth: AdminauthService,
    private common: CommonService,
    private session: SessionService,
    private authuser: UserauthService
   ) { }

    

    registerForm   = new FormGroup({
    EmployeeName: new FormControl(''),
    mobile: new FormControl(''),
    Email: new FormControl(''),
    Password: new FormControl(''),
    ConfrmPassword: new FormControl(''),
    
})

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      EmployeeName:['', Validators.required],
      mobile:['', Validators.required],
      Email: ['',[Validators.required, Validators.email]],
      Password: ['', Validators.required],
      ConfrmPassword: ['', Validators.required],
    })
  }


  get v(){
    return this.registerForm.controls
  }

  registerUser(){
    try {
      if(this.registerForm.valid){
        this.authuser.userregister(this.registerForm.value)

      }
      else{
      this.registerForm.markAllAsTouched();
      // this.toastr.error("Fill The Required Fields")
       }
    } catch (error) {
      throw this.common.handleError(error, this.session, this.toastr)
    }


    
    // if(this.registerForm.valid){
    //   this.auth.userRegister(this.registerForm.value).subscribe((res:any)=>{
    //     console.log(res)
    //     this.toastr.success("sucess")
    //   })
    // }
    // else{
    //   this.registerForm.markAllAsTouched();
    //   this.toastr.error("Fill The Required Fields")
    // }
  //   try{
  //     if(this.registerForm.valid){
  //       // this.auth.userLogin(this.registerForm.value.employeename, parseInt(this.registerForm.value.mobile), this.registerForm.value.email, this.registerForm.value.password)
  //       // console.log(this.registerForm.value)
  //     }
  //     else{
  //       this.toastr.error("Enter Valid Login Credentials")
  //       this.registerForm.markAllAsTouched();
  //     }
  //   }
  //     catch(error){
  //       throw this.common.handleError(error,this.session,this.toastr);
  //     }
    // if(this.registerForm.valid){
    //   this.authuser.userregister(this.registerForm.value).subscribe((res:any)=>{
    //     console.log(res)
    //   })
    // }
    // else{
    //   this.toastr.error("Fill the form")
    //   this.registerForm.markAllAsTouched()
    // }
  // // }
}
}