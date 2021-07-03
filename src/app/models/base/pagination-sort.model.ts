export class PaginationSortModel {
  currentPage: number;
  pageSize: number;
  totalPages: number;
  totalElements: number;
  sortProperty: string;
  sortDirection: ESortDirection;

  constructor(currentPage: number, pageSize: number, sortProperty: string, sortDirection: ESortDirection = ESortDirection.ASC) {
    this.currentPage = currentPage;
    this.pageSize = pageSize;
    this.sortProperty = sortProperty;
    this.sortDirection = sortDirection;
  }

  public static createDefaultPaginationSortCommand(): PaginationSortModel {
    return new PaginationSortModel(1, 10, '');
  }
}

export enum ESortDirection {
  'ASC' = 'ASC',
  'DESC' = 'DESC'
}
