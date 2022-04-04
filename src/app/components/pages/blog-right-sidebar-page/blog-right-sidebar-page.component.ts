import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BlogsService } from '../admin/admin-dashboard/blog/services/blogs.service';

@Component({
  selector: 'app-blog-right-sidebar-page',
  templateUrl: './blog-right-sidebar-page.component.html',
  styleUrls: ['./blog-right-sidebar-page.component.scss']
})
export class BlogRightSidebarPageComponent implements OnInit {
  pic:any;
  blogpic:any=[];
  blogs:any=[];
  constructor(private blog: BlogsService,private sanitizer: DomSanitizer) { }

  async ngOnInit() {
  
    const res:any= await this.blog.getBlogs().toPromise();
     this.blogs = res;
     console.log(this.blogs);
      this.picDisplay(); 
  }

  picDisplay(){
    for(var i in this.blogs){
      this.pic =  this.blogs[i].projectpic;
      let objectURL = 'data:image/jpeg;base64,'+this.pic; 
      this.blogpic[i] = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    }
    console.log(this.blogpic);
  }
}
