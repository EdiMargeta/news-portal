import {UserSaveCommand} from '../../models/user/command/user-save.command';
import {UserFilterCommand} from '../../models/user/command/user-filter.command';
import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {ApiCommand, ApiPageCommand, ApiPageResponse, ApiResponse} from '../../models/base/api.model';
import {Observable} from 'rxjs';


@Injectable()
export class UsersProvider {
  private readonly NEWS_URL = environment.apiUrl + '/news-portal/user';

  constructor(private http: HttpClient) {
  }

  saveUser(command: ApiCommand<UserSaveCommand>): Observable<ApiResponse<any>> {
    return this.http.post<ApiResponse<any>>(this.NEWS_URL + '/save', command);
  }

  fetchUsers(command: ApiPageCommand<UserFilterCommand>): Observable<ApiPageResponse<any>> {
    return this.http.post<ApiPageResponse<any>>(this.NEWS_URL + '/filter', command);
  }

  deleteUser(id: number): void{
     this.http.post(this.NEWS_URL + '/delete',  id);
  }
}
