import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from 'src/app/components/pages/services/helper';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor(private http:HttpClient) { }
 
  public getBlogs(){
    return this.http.get(`${baseUrl}/blog/`);
  }

  public addBlog(blog){
     return this.http.post(`${baseUrl}/blog/`,blog);
  }

  public getBlog(bid){
    return this.http.get(`${baseUrl}/blog/`+bid);
  }
}
