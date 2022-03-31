import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  constructor(
    private userService : UserService,
    private _snackBar: MatSnackBar
  ) { }
  submit:boolean=false;
 picByte:any=File;
  public user = {
    username: '',
    password: '',
    firstName:'',
    lastName:'',
    phone:'',
  }

  ngOnInit(): void {
  }
  onFileChanged(event){
    const file = event.target.files[0];
    this.picByte = file;
    console.log(this.picByte);
  }
  formSubmit(){
  
   const finaluser=new FormData();
   finaluser.append('user',JSON.stringify(this.user));
   finaluser.append('file',this.picByte);
   console.log(finaluser);
   if(this.user.username== '' || this.user.username ==null){
    this._snackBar.open('Username is required','ok',{
      duration:4000,
    })
     
   }
   if(this.user.password== '' || this.user.password ==null){
    this._snackBar.open('Password is required','ok',{
      duration:4000,
    })
    
  }
   if(this.user.username!= '' &&  this.user.password!=''){
    this.userService.addUser(finaluser).subscribe(
      (data) =>{
        console.log(data);
        this.submit= true;
      },
      (error) =>{
        console.log(error);
        this._snackBar.open('Username is already registered','ok',{
          duration:4000,
        })
      }
    ) 
   }
  }

}
