import { Component, OnInit } from '@angular/core';
import { ProjectCategoryService } from '../../pages/admin/admin-dashboard/project/services/project-category.service';

@Component({
  selector: 'app-categories-style-three',
  templateUrl: './categories-style-three.component.html',
  styleUrls: ['./categories-style-three.component.scss']
})
export class CategoriesStyleThreeComponent implements OnInit {

  categories=[];

  constructor(private projectCategoryService: ProjectCategoryService) { }

  ngOnInit(): void {
    this.projectCategoryService.categories().subscribe((data:any)=>{
       this.categories = data;
    },(error)=>{
      console.log(error);
    });
  }

}
