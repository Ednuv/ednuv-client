import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../admin/admin-dashboard/quiz/services/category.service';

@Component({
  selector: 'app-quiz-main',
  templateUrl: './quiz-main.component.html',
  styleUrls: ['./quiz-main.component.scss']
})
export class QuizMainComponent implements OnInit {

  constructor(private categroyService : CategoryService) { }

  categories=[];
  ngOnInit(): void {
    this.categroyService.categories().subscribe((data:any)=>{
      this.categories =data;
    },
    (error)=>{
       alert(error);
    }
    );
  }
  

}
