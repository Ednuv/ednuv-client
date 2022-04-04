import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../services/blogs.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.scss']
})
export class AddBlogComponent implements OnInit {
  public Editor = ClassicEditor;
  categories =[];
  blogs =[];
  projectpic:File;
  blogData={
    title:'',
    subtitle:'',
    introduction:'',
    description:'',
    conclusion:'',
    author:'',
    relatedvideo:''
  }

  constructor(private blogsService : BlogsService) { }

  ngOnInit(): void {
  }
  onFileChanged(event){
    const file = event.target.files[0];
    this.projectpic = file;
    console.log(this.projectpic);
  }
  formSubmit(){
    const finalData=new FormData();
    finalData.append('blog',JSON.stringify(this.blogData));
    finalData.append('file',this.projectpic);
    this.blogsService.addBlog(finalData).subscribe(
      (data)=>{
        console.log(data);
        this.blogData={
          title:'',
          subtitle:'',
          introduction:'',
          description:'',
          conclusion:'',
          author:'',
          relatedvideo:''
       }
      },
      (error)=>{
        console.log(error);
      }
   );

  }
}
