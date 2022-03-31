import { Component, OnInit } from '@angular/core';
import { ProjectCategoryService } from '../services/project-category.service';
import { ProjectDescriptionService } from '../services/project-description.service';

@Component({
  selector: 'app-project-description',
  templateUrl: './project-description.component.html',
  styleUrls: ['./project-description.component.scss']
})
export class ProjectDescriptionComponent implements OnInit {

  qId;
  qtitle;
  categories =[];
  quizzes =[];
  projectpic:File;
  quizData={
    title:'',
    description:'',
    shortdescription:'',
    cost:'',
    author:'',
    projectLength:'',
    github:'',
    whatsApp:'',
    requirements:'',
    level:'',
    relatedquiz:'',
    active:'',
    category: {
      cid:''
    }
  }

  constructor(private cat: ProjectCategoryService,private projectDescriptionService:ProjectDescriptionService) { }

  ngOnInit(): void {
    this.cat.categories().subscribe(
      (data:any)=>{
        this.categories=data;
      },
      (error)=>{
        alert(error);
      }
    );
  }
  onFileChanged(event){
    const file = event.target.files[0];
    this.projectpic = file;
    console.log(this.projectpic);
  }
  formSubmit(){
    const finalData=new FormData();
    finalData.append('projectdescription',JSON.stringify(this.quizData));
    finalData.append('file',this.projectpic);
    this.projectDescriptionService.addproject(finalData).subscribe(
      (data)=>{
        console.log(data);
        this.quizData={
          title:'',
          description:'',
          shortdescription:'',
          cost:'',
          author:'',
          projectLength:'',
          github:'',
          whatsApp:'',
          requirements:'',
          level:'',
          relatedquiz:'',
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
