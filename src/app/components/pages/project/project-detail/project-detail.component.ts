import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ProjectCategoryService } from '../../admin/admin-dashboard/project/services/project-category.service';
import { ProjectDescriptionService } from '../../admin/admin-dashboard/project/services/project-description.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {

  cId;
  starRating = 0; 
  projects:any=[];
  relatedprojects:any=[];
  pic:any;
  projectpic:any;
  relatedpic:any=[];
  relatedprojectpic:any=[];
  constructor(private route: ActivatedRoute, private projectdescription: ProjectDescriptionService, private cat: ProjectCategoryService,private sanitizer: DomSanitizer) { }

  async ngOnInit() {
    this.cId = this.route.snapshot.params.cid;
    const res:any= await this.projectdescription.getProject(this.cId).toPromise();
    this.projects.push(res);
     this.picDisplay(); 
     console.log(this.starRating);
  }
  picDisplay(){
    this.pic =  this.projects[0].projectpic;
    let objectURL = 'data:image/jpeg;base64,'+this.pic; 
    this.projectpic = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    this.relatedProject();
  }
  async relatedProject(){
    const res:any= await this.projectdescription.getAllProjects().toPromise();
    this.relatedprojects.push(res);
    this.relatedPicDisplay();
  }
  relatedPicDisplay(){
    console.log(this.relatedprojects);
    for(var i in this.relatedprojects){
      this.relatedpic =  this.relatedprojects[i].projectpic;
      let objectURL = 'data:image/jpeg;base64,'+this.relatedpic; 
      this.relatedprojectpic[i] = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    }
  }
}
