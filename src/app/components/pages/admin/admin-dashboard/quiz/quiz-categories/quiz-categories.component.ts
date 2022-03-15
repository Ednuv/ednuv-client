import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-quiz-categories',
  templateUrl: './quiz-categories.component.html',
  styleUrls: ['./quiz-categories.component.scss']
})
export class QuizCategoriesComponent implements OnInit {
  cat={
    title:'',
    description:''
  }
  categories=[];
 
  constructor(private category: CategoryService ) { }

  ngOnInit(): void {

    this.category.categories().subscribe((data:any)=>{
      this.categories =data;
    },
    (error)=>{
       alert(error);
    }
    );
  }
  formSubmit(){
    if(this.cat.title.trim()=='' ||  this.cat.title.trim()==null){
      alert("Plese enter title")
    } 
    this.category.addCategory(this.cat).subscribe(
      (data:any)=>{
        console.log("Success");
      },
      (error)=>{
        console.log(error);
      }
    )
  }

}
