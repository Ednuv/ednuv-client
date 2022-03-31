import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from 'src/app/components/pages/services/helper';

@Injectable({
  providedIn: 'root'
})
export class ProjectDescriptionService {

  constructor(private http: HttpClient) { }

  public getProject(pid){
    return this.http.get(`${baseUrl}/projectdescription/`+pid);
  }

  public addproject(project){
    return this.http.post(`${baseUrl}/projectdescription/`,project);
 }
 
  public getProjects(cid){
    return this.http.get(`${baseUrl}/projectdescription/projectcategory/`+cid);
  }
  public getAllProjects(){
    return this.http.get(`${baseUrl}/projectdescription/`);
  }
}
