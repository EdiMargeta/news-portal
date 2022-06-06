import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ApiCommand, ApiPageCommand, ApiPageResponse, ApiResponse} from '../../../models/base/api.model';
import {NewsArticleSaveCommand} from '../../../models/news/command/save/news-article-save.command';
import {NewsFilterCommand} from '../../../models/news/command/filter/news-filter.command';

@Injectable()
export class NewsProvider {
  private readonly NEWS_URL = environment.apiUrl + '/news-portal';

  constructor(private http: HttpClient) {
  }

  saveTourismArticle(command: ApiCommand<NewsArticleSaveCommand>): Observable<ApiResponse<any>> {
    return this.http.post<ApiResponse<any>>(this.NEWS_URL + '/save', command);
  }

  fetchNews(command: ApiPageCommand<NewsFilterCommand>): Observable<ApiPageResponse<any>> {
    return this.http.post<ApiPageResponse<any>>(this.NEWS_URL + '/filter-all-by-category', command);
  }

  fetchWorldNews(): Observable<ApiResponse<any>> {
    return this.http.get<ApiResponse<any>>(this.NEWS_URL + '/world-news');
  }

  fetchLastThreeEachCategory(): Observable<ApiResponse<any>> {
    return this.http.get<ApiResponse<any>>(this.NEWS_URL + '/filter-all-recent');
  }

  get(id: number): Observable<any> {
    return this.http.get<any>(this.NEWS_URL + '/' + id);
  }
}
