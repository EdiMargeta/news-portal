import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ApiCommand, ApiPageCommand, ApiPageResponse, ApiResponse} from '../../../models/base/api.model';
import {NewsArticleSaveCommand} from '../../../models/news/command/save/news-article-save.command';
import {NewsFilterCommand} from '../../../models/news/command/filter/news-filter.command';

@Injectable()
export class NewsProvider {
  private readonly NEWS_URL = environment.apiUrl + 'news';

  constructor(private http: HttpClient) {
  }

  saveTourismArticle(command: ApiCommand<NewsArticleSaveCommand>): Observable<ApiResponse<any>> {
    console.log("COMMAND", command);
    return this.http.post<ApiResponse<any>>(this.NEWS_URL + '/save', command);
  }

  fetchNews(command: ApiPageCommand<NewsFilterCommand>): Observable<ApiPageResponse<any>> {
    console.log("COMMAND", command);
    return this.http.post<ApiPageResponse<any>>(this.NEWS_URL + '/filterAll', command);
  }
}
