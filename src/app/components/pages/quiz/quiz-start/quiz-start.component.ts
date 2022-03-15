import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { QuestionsService } from '../../admin/admin-dashboard/quiz/services/questions.service';

@Component({
  selector: 'app-quiz-start',
  templateUrl: './quiz-start.component.html',
  styleUrls: ['./quiz-start.component.scss']
})
export class QuizStartComponent implements OnInit {

  qid;
  questions:any=[];
  marksGot:number=0;
  correctAnswers=0;
  attempted=0;
  isSubmit = false;
  timer: any;

  constructor(
    private locationSt:LocationStrategy,
    private route:ActivatedRoute,
    private question: QuestionsService
  ) { }

  ngOnInit(): void {
    this.preventBackButton();
    this.qid=this.route.snapshot.params.qid;
    console.log(this.qid);
    this.loadQuestion();
  }

  loadQuestion(){
    this.question.getQuestions(this.qid).subscribe(
      (data)=>{
       this.questions = data;
       this.timer = this.questions.length * 2 * 60;
       this.setTimer();
       console.log(this.questions);
      },(error)=>{
        console.log(error);
      }
    )
  }
  preventBackButton(){
     history.pushState(null,null,location.href);
     this.locationSt.onPopState(()=>{
        history.pushState(null,null,location.href);
     });
  }
  SubmitQuiz(){
    Swal.fire({
      title: 'Do you want to submit the quiz?',
      showCancelButton: true,
      confirmButtonText: 'Submit',
      icon:'info'
    }).then((e)=>{
      if(e.isConfirmed){
        this.evalQuiz();
      }
    })

  }

  setTimer(){
   let t= window.setInterval(()=>{
      if(this.timer<=0){
       this.evalQuiz();
        clearInterval(t);
      }else{
        this.timer--;
      }
    },1000)
  }
  getFromattedTime(){
    let mm = Math.floor(this.timer/60);
    let ss = this.timer-(mm*60);
    return `${mm} min: ${ss} sec`;
  }
  evalQuiz(){

    this.question.evalQuiz(this.questions).subscribe(
      (data:any)=>{
        console.log(data);
        this.marksGot = parseFloat(Number(data.marksGot).toFixed(2));
        this.correctAnswers = data.correctAnswers;
        this.attempted = data.attempted;
        this.isSubmit = true;
      },(error)=>{
         console.log(error);
      }
    )
   /* this.questions.forEach(q=>{
      if(q.givenAnswer==q.answer){
        this.correctAnswers++;
        let singleMarks = this.questions[0].quiz.maxMarks/this.questions.length;
        this.marksGot += singleMarks;
       
      }
      if(q.givenAnswer.trim() !=''){
        this.attempted++;
      }
    })
    this.isSubmit = true;*/

  }
  printPage(){
    window.print();
  }
}
