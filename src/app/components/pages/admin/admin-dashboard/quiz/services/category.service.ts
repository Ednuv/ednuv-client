import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from 'src/app/components/pages/services/helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http:HttpClient) { }

  public categories(){
    return this.http.get(`${baseUrl}/quizcategory/`);
  }

  public addCategory(category){
     return this.http.post(`${baseUrl}/quizcategory/`,category);
  }

  
}
