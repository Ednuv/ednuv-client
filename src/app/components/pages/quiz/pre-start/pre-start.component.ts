import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../../admin/admin-dashboard/quiz/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pre-start',
  templateUrl: './pre-start.component.html',
  styleUrls: ['./pre-start.component.scss']
})
export class PreStartComponent implements OnInit {
 qid;
 quiz:any=[];
  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService,
    private _route: Router
  ) { }

  ngOnInit(): void {
    this.qid= this.route.snapshot.params.qid;
    this.quizService.getOneQuiz(this.qid).subscribe(
      (data)=>{
        this.quiz = data;
      },
      (error)=>{
         console.log(error);
      }
    )
  }

  OnStart(){
    Swal.fire({
      title: 'Do you want to start the quiz?',
      showCancelButton: true,
      confirmButtonText: 'Start',
      denyButtonText: `Don't Start`,
      icon:'info'
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this._route.navigate(['/quiz-start/'+this.qid]);
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }
}
