import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import {PaginationSortModel} from './pagination-sort.model';

class ApiStateCommand {
  userId: string;
  locale: string;

  constructor(userId: string, locale: string) {
    this.userId = userId;
    this.locale = locale;
  }
}

export class ApiCommand<T = any> {
  // @ts-ignore
  // @Select(AuthState.getAuthState) stateSelector: Observable<AuthStateModel>;
  state: ApiStateCommand;
  command?: T;

  constructor(command?: T) {
    this.command = command;

    // this.stateSelector
    //   .pipe(take(1))
    //   .subscribe(state => {
    //     if (typeof state !== 'undefined') {
    //       this.state = new ApiStateCommand(state.userId, state.locale);
    //     }
    //   });
  }
}

export class ApiPageCommand<T = any> extends ApiCommand<T> {
  paginationAndSorting: PaginationSortModel;

  constructor(pagination?: PaginationSortModel, command?: T) {
    super(command);

    if (pagination) {
      this.paginationAndSorting = pagination;
    } else {
      this.paginationAndSorting = PaginationSortModel.createDefaultPaginationSortCommand();
    }
  }
}

export class ApiResponse<T> {
  error: ApiError;
  success: boolean;
  response: T;
}

export class ApiPageResponse<T> extends ApiResponse<T> {
  pageSortObject: PaginationSortModel;
}

export class ApiError {
  message: string;
  messageKey: string;
}
