import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.scss']
})
export class QuizzesComponent implements OnInit {

  qId;
  qtitle;
  categories =[];
  quizzes =[];
  quizData={
    title:'',
    description:'',
    maxMarks:'',
    numberOfQuestion:'',
    active:'',
    category: {
      cid:''
    }
  }
  constructor(private cat: CategoryService, private quizService :QuizService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  
 
    this.cat.categories().subscribe(
      (data:any)=>{
        this.categories=data;
      },
      (error)=>{
        alert(error);
      }
    );
    console.log(this.quizzes);
  }
  formSubmit(){
     console.log(this.quizData);
     if(this.quizData.title.trim()=='' || this.quizData.title == null){
       alert("title Required");
     }
     if(this.quizData.maxMarks.trim()=='' || this.quizData.maxMarks == null){
      alert("Max Marks Required");
    }
    if(this.quizData.numberOfQuestion.trim()=='' || this.quizData.numberOfQuestion == null){
      alert("Number of Question Required");
    }
     this.quizService.addQuiz(this.quizData).subscribe(
       (data)=>{
         console.log(data);
         this.quizData={
          title:'',
          description:'',
          maxMarks:'',
          numberOfQuestion:'',
          active:'',
          category: {
            cid:''
          }
        }
       },
       (error)=>{
         console.log(error);
       }
    );
  }

}
