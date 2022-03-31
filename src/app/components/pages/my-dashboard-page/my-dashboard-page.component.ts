import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-my-dashboard-page',
  templateUrl: './my-dashboard-page.component.html',
  styleUrls: ['./my-dashboard-page.component.scss']
})
export class MyDashboardPageComponent implements OnInit {
 user= null;
 pic:any;
 thumbnail:any;

  constructor(private login: LoginService,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.user = this.login.getUser();
    this.pic = this.user.picByte;
    let objectURL = 'data:image/jpeg;base64,'+this.pic; 
    this.thumbnail = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    console.log(this.thumbnail);
  }

}
