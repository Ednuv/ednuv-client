import { Component, OnInit } from '@angular/core';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-quiz-view',
  templateUrl: './quiz-view.component.html',
  styleUrls: ['./quiz-view.component.scss']
})
export class QuizViewComponent implements OnInit {
  quizzes =[];
  constructor( private quizService :QuizService) { }

  ngOnInit(): void {
      
    this.quizService.getQuiz().subscribe(
      (data:any)=>{
        this.quizzes = data
      },
      (error)=>{
        console.log(error);
      }
    );
  }

}
