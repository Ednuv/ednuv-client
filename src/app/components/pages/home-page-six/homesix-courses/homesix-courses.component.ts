import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ProjectDescriptionService } from '../../admin/admin-dashboard/project/services/project-description.service';

@Component({
  selector: 'app-homesix-courses',
  templateUrl: './homesix-courses.component.html',
  styleUrls: ['./homesix-courses.component.scss']
})
export class HomesixCoursesComponent implements OnInit {
 projects: any=[];
 pic: any=[];
 projectpic:any=[];
 mostPopularProjects:any=[];
 recentArray:any=[];
  constructor(
    private projectDescriptionService:ProjectDescriptionService,
    private sanitizer: DomSanitizer
  ) { }

  async ngOnInit() {
    
    const res:any= await this.projectDescriptionService.getAllProjects().toPromise();
     this.projects = res;
     console.log(this.projects);
      this.picDisplay(); 
  }

  picDisplay(){
    for(var i in this.projects){
      this.pic =  this.projects[i].projectpic;
      let objectURL = 'data:image/jpeg;base64,'+this.pic; 
      this.projectpic[i] = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    }
    let array = [];
    let recentarray = [];
    array = [...this.projects];
    recentarray = [...this.projects];
    this.courseMostPopular(array);
    this.courseRecentAdded(recentarray);
  }
   courseMostPopular(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    this.mostPopularProjects = [...array];
    console.log(this.mostPopularProjects);
}
courseRecentAdded(array){
  var j=0;
  for(var i= array.length-1;i>0;i--){
    
    var temp = array[i];
    array[i]= array[j];
    array[j]= temp;
    j++;
  }
  this.recentArray = [...array];
  console.log(this.recentArray);
    
}
  

}
