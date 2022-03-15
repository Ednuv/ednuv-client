import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from '../services/questions.service';

@Component({
  selector: 'app-add-quiz-question',
  templateUrl: './add-quiz-question.component.html',
  styleUrls: ['./add-quiz-question.component.scss']
})
export class AddQuizQuestionComponent implements OnInit {
 qId;
 question={
   quiz:{

   },
   content:'',
   option1:'',
   option2:'',
   option3:'',
   option4:'',
   answer:''
 }
  constructor(private route:ActivatedRoute, private questionService : QuestionsService) { }

  ngOnInit(): void {
    this.qId = this.route.snapshot.params.qId;
    this.question.quiz['qId'] = this.qId;
    console.log(this.question);
  }

  formSubmit(){
    if(this.question.content.trim()=='' || this.question.content == null){
      alert("Enter Question");
    }
    this.questionService.addQuestions(this.question).subscribe(
      (data)=>{
        console.log(data);
      },
      (error)=>{
        console.log(error);
      }
    )
  }

}
