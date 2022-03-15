import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  constructor(
    private userService : UserService
  ) { }

  public user = {
    username: '',
    password: '',
    firstName:'',
    lastName:'',
    phone:''
  }

  ngOnInit(): void {
  }
  formSubmit(){
   console.log(this.user);
   if(this.user.username== '' || this.user.username ==null){
     alert("usernams is required");
   }
    this.userService.addUser(this.user).subscribe(
      (data) =>{
        console.log(data);
      },
      (error) =>{
        console.log(error);
      }
    )
  }

}
