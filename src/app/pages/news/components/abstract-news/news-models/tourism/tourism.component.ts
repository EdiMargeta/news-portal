import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ApiCommand, ApiPageCommand, ApiResponse} from '../../../../../../models/base/api.model';
import {NewsArticleSaveCommand} from '../../../../../../models/news/command/save/news-article-save.command';
import {finalize, takeUntil} from 'rxjs/operators';
import {MainComponent} from '../../../../../../core/main.component';
import {SpinnerProvider} from '../../../../../../core/providers/spinner.provider';
import {NewsProvider} from '../../../../providers/news.provider';
import {NewsFilterCommand} from '../../../../../../models/news/command/filter/news-filter.command';
import {PaginationSortModel} from '../../../../../../models/base/pagination-sort.model';
import {NewsArticleModel} from '../../../../../../models/news/model/news-article.model';

@Component({
  selector: 'app-tourism',
  templateUrl: './tourism.component.html',
  styleUrls: ['./tourism.component.css']
})
export class TourismComponent extends MainComponent implements OnInit {
  pagination: PaginationSortModel = PaginationSortModel.createDefaultPaginationSortCommand();
  newsArticles: NewsArticleModel[];

  constructor(private spinnerProvider: SpinnerProvider,
              private newsProvider: NewsProvider) {
    super();
  }

  ngOnInit(): void {
    this.fetchNews();
  }

  fetchNews(): void {
    this.spinnerProvider.showSpinner();
    this.newsProvider.fetchNews(new ApiPageCommand(this.pagination, NewsFilterCommand.fromObject({category: 'tourism'})))
      .pipe(
        takeUntil(this.unsubscribe),
        finalize(() => {
          this.spinnerProvider.showSpinner(false);
        })
      )
      .subscribe((response: ApiResponse<any>) => {
        if (response.success) {
          this.newsArticles = NewsArticleModel.fromArray(response.response);
          console.log(this.newsArticles);
          // this.notification.success(this.translation.translate('common.success'),
          //   this.translation.translate('common.action.success'));
        } else {
          // this.notification.error(this.translation.translate('common.error'), response.error.message);
        }
      });
  }

}
