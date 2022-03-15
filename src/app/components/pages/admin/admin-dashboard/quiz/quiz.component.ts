import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  user= null;
  constructor(private login: LoginService) { }

  ngOnInit(): void {
    this.user = this.login.getUser();
  }

}
