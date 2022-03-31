import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ProjectCategoryService } from '../../admin/admin-dashboard/project/services/project-category.service';
import { ProjectDescriptionService } from '../../admin/admin-dashboard/project/services/project-description.service';

@Component({
  selector: 'app-project-display',
  templateUrl: './project-display.component.html',
  styleUrls: ['./project-display.component.scss']
})
export class ProjectDisplayComponent implements OnInit {
  cId;
  pic:any;
  projectpic:any=[];
  projects:any=[];
  constructor(private route: ActivatedRoute, private projectdescription: ProjectDescriptionService, private cat: ProjectCategoryService,private sanitizer: DomSanitizer) { }

    async ngOnInit() {
    this.cId = this.route.snapshot.params.cid;
    const res:any= await this.projectdescription.getProjects(this.cId).toPromise();
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
    console.log(this.projectpic);
  }
}
