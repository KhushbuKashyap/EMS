import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/appservice/session/session.service';
import { UsermasterService } from 'src/app/appservice/user/usermaster.service';

@Component({
  selector: 'app-employeestatistics',
  templateUrl: './employeestatistics.component.html',
  styleUrls: ['./employeestatistics.component.scss']
})
export class EmployeestatisticsComponent implements OnInit {

  constructor(
    private session: SessionService,
    private usermaster: UsermasterService
  ) { }

  ngOnInit(): void {


  }

}
