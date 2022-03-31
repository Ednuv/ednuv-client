import { Component, OnInit } from '@angular/core';
import { ProjectCategoryService } from '../admin/admin-dashboard/project/services/project-category.service';

@Component({
  selector: 'app-category-page-three',
  templateUrl: './category-page-three.component.html',
  styleUrls: ['./category-page-three.component.scss']
})
export class CategoryPageThreeComponent implements OnInit {

  categories=[];
  constructor(private projectCategoryService: ProjectCategoryService) { }

  ngOnInit(): void {
    this.projectCategoryService.categories().subscribe((data:any)=>{
       this.categories = data;
       console.log(data);
    },(error)=>{
      console.log(error);
    })
  }
}
