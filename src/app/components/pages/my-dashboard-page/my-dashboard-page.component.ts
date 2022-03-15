import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-my-dashboard-page',
  templateUrl: './my-dashboard-page.component.html',
  styleUrls: ['./my-dashboard-page.component.scss']
})
export class MyDashboardPageComponent implements OnInit {
 user= null;
  constructor(private login: LoginService) { }

  ngOnInit(): void {
    this.user = this.login.getUser();
  }

}
