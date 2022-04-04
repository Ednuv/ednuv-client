import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { BlogsService } from '../admin/admin-dashboard/blog/services/blogs.service';

@Component({
  selector: 'app-blog-details-page',
  templateUrl: './blog-details-page.component.html',
  styleUrls: ['./blog-details-page.component.scss']
})
export class BlogDetailsPageComponent implements OnInit {
  bId;
  blogs:any=[];
  blogpic:any;
  pic:any;

  constructor(private blog: BlogsService,private route: ActivatedRoute,private sanitizer: DomSanitizer) { }

   async ngOnInit() {
    this.bId = this.route.snapshot.params.bId;
    const res:any= await this.blog.getBlog(this.bId).toPromise();
    this.blogs.push(res);
    console.log(this.blogs);
     this.picDisplay(); 
  }
  picDisplay(){
    this.pic =  this.blogs[0].projectpic;
    let objectURL = 'data:image/jpeg;base64,'+this.pic; 
    this.blogpic = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    console.log(this.blogpic);
  }

}
