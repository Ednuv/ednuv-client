import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../pages/services/login.service';

@Component({
    selector: 'app-header-style-four',
    templateUrl: './header-style-four.component.html',
    styleUrls: ['./header-style-four.component.scss']
})
export class HeaderStyleFourComponent implements OnInit {

    isLoggedIn= false;
    user = null;
    constructor(public login:LoginService) { }

    ngOnInit(): void {
        this.isLoggedIn = this.login.isLoggedIn();
        this.user = this.login.getUser();

    }

    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

    classApplied2 = false;
    toggleClass2() {
        this.classApplied2 = !this.classApplied2;
    }

    classApplied3 = false;
    toggleClass3() {
        this.classApplied3 = !this.classApplied3;
    }
    public logout(){
        this.login.logout();
        this.isLoggedIn= false;
        this.user= null;
        window.location.reload();
    }

}