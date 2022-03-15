import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from '../services/questions.service';

@Component({
  selector: 'app-quiz-questions',
  templateUrl: './quiz-questions.component.html',
  styleUrls: ['./quiz-questions.component.scss']
})
export class QuizQuestionsComponent implements OnInit {

  qId;
  qtitle;
  questions:any = [];
  constructor(private route: ActivatedRoute, private questionService : QuestionsService) { }

  ngOnInit(): void {
    this.qId = this.route.snapshot.params.qId;
    this.qtitle = this.route.snapshot.params.title;
    this.questionService.getQuestions(this.qId).subscribe(
      (data)=>{
        this.questions = data;
        console.log(data);
      },
      (error)=>{
        console.log(error);
      }
    )
  }

}
