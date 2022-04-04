import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';
import { WindowRef } from 'ngx-owl-carousel-o/lib/services/window-ref.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginData= {
    username:'',
    password:''
  };
  constructor(private login: LoginService, private router: Router,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  formSubmit(){
    console.log("login form submit");
    if(this.loginData.username.trim()=='' || this.loginData.username==null){
      this._snackBar.open('Username is required','ok',{
        duration:4000,
      })
    }
    if(this.loginData.password.trim()=='' || this.loginData.password==null){
      alert("Please enter password");
    }
    this.login.generateToken(this.loginData).subscribe(
      (data)=>{
        this.login.loginUser(data);
        this.login.getCurrentUser().subscribe(
          (user:any)=>{
            this.login.setUser(user);
            console.log(user); 
            if(this.login.getUserRole()=='Normal'){
            //  window.location.href='/my-dashboard';
              this.router.navigate([''])
            }else if(this.login.getUserRole()=='Admin'){
              this.router.navigate(['admin-dashboard'])
            }else{
              this.login.logout();
            }
          }
        )
      },(error)=>{
        console.log(error);
      }
    );
  }
}
