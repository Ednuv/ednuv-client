import { Component, OnInit } from '@angular/core';
import { ProjectCategoryService } from '../services/project-category.service';

@Component({
  selector: 'app-project-categories',
  templateUrl: './project-categories.component.html',
  styleUrls: ['./project-categories.component.scss']
})
export class ProjectCategoriesComponent implements OnInit {
  cat={
    title:'',
    description:''
  }
  categories=[];
  constructor(private category: ProjectCategoryService) { }

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
