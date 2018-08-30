import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ArticlesProvider {
  apiUrl:string;

  constructor(public http: HttpClient) {
    this.apiUrl = "https://dpressed.herokuapp.com/api"
  }

  saveData(data) {
    return this._tokenService.post('performance_data', data).map(data => data);
  }

  getArticles() {
    return this.http.get(this.apiUrl)
  }
}