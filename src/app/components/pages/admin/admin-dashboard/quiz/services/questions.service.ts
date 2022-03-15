import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from 'src/app/components/pages/services/helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http: HttpClient) { }

  public addQuestions(question){
    return this.http.post(`${baseUrl}/quizquestion/`,question);
  }
  public getQuestions(qId){
    return this.http.get(`${baseUrl}/quizquestion/quiz/${qId}`);
  }

  public evalQuiz(questions){
     return this.http.post(`${baseUrl}/quizquestion/eval-quiz/`,questions)
  }
}
