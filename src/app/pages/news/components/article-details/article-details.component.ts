import {Component, OnInit} from '@angular/core';
import {ApiCommand, ApiResponse} from '../../../../models/base/api.model';
import {finalize, takeUntil} from 'rxjs/operators';
import {NewsArticleModel} from '../../../../models/news/model/news-article.model';
import {SpinnerProvider} from '../../../../core/providers/spinner.provider';
import {NewsProvider} from '../../providers/news.provider';
import {ActivatedRoute} from '@angular/router';
import {MainComponent} from '../../../../core/main.component';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent extends MainComponent implements OnInit {
  articleId: number;
  article: NewsArticleModel;

  constructor(private spinnerProvider: SpinnerProvider,
              private newsProvider: NewsProvider,
              private activatedRoute: ActivatedRoute) {
    super();
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params.id) {
        this.articleId = params.id;
        this.getArticle();
      }
      console.log('params');
      console.log(params.id);
      // In a real app: dispatch action to load the details here.
    });
  }

  getArticle(): void {
    this.spinnerProvider.showSpinner();
    this.newsProvider.get(this.articleId)
      .pipe(
        takeUntil(this.unsubscribe),
        finalize(() => {
          this.spinnerProvider.showSpinner(false);
        })
      )
      .subscribe((response: ApiResponse<any>) => {
        if (response.success) {
          this.article = NewsArticleModel.fromObject(response.response);
          console.log(this.article);
          // this.notification.success(this.translation.translate('common.success'),
          //   this.translation.translate('common.action.success'));
        } else {
          // this.notification.error(this.translation.translate('common.error'), response.error.message);
        }
      });
  }


}
