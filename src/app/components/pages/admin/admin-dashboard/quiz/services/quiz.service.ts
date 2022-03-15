import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from 'src/app/components/pages/services/helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }
  public getQuiz(){
    return this.http.get(`${baseUrl}/quiz/`);
  }
  public addQuiz(quiz){
    return this.http.post(`${baseUrl}/quiz/`,quiz);
  }
  public getQuizzes(cid){
    return this.http.get(`${baseUrl}/quiz/quizcategory/`+cid);
  }
  public getOneQuiz(qId){
    return this.http.get(`${baseUrl}/quiz/${qId}`);
  }
}
