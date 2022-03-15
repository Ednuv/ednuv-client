import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../../admin/admin-dashboard/quiz/services/quiz.service';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.scss']
})
export class QuizListComponent implements OnInit {

  cId;
  quizzes:any=[];
  constructor(private route: ActivatedRoute, private quizService: QuizService) { }

  ngOnInit(): void {
    this.cId = this.route.snapshot.params.cId;
    this.quizService.getQuizzes(this.cId).subscribe(
      (data)=>{
        this.quizzes = data;
        console.log(data);
      },
      (error)=>{
        console.log(error);
      }
      )
      
    console.log(this.cId);
  }

}
