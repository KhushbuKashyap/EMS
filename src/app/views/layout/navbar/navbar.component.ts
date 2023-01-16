import { Component, OnInit, ViewChild, ElementRef, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/appservice/session/session.service';
import { USERMENU } from '../sidebar/menu-user';
import { MENU } from '../sidebar/menu';
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private router: Router,
    private session: SessionService
  ) { }

  ngOnInit(): void {
  }

  getAdmin() {
    return this.session.getsession('Username')
  }

  // toggleSidebar(e) {
  //   e.preventDefault();
  //   this.document.body.classList.toggle('sidebar-open');
  // }



  Logout() {
    this.router.navigate(['/adminlogin'])
    this.session.clearparticularsession('Username')

    let path = location.href.slice(location.href.lastIndexOf('/'), location.href.length)
    console.log(path)
    console.log(USERMENU)

    if (path == '/adminView') {
      if (MENU[0].label == "Attendance (Admin)") {
        this.router.navigate(['/adminlogin'])
        this.session.clearparticularsession('Username')
      }
    }
    else if (path == '/location') {
      if (USERMENU[0].label == "Attendence (Employee)") {
        this.router.navigate(['/userlogin'])
        this.session.clearparticularsession('Username')
      }
    }
  }


  // onLogout(e) {
  //   e.preventDefault();
  //   localStorage.removeItem('isLoggedin');

  //   if (!localStorage.getItem('isLoggedin')) {
  //     this.router.navigate(['/auth/login']);
  //   }
  // }

}
