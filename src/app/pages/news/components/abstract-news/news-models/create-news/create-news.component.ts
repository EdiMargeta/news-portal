import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SpinnerProvider} from '../../../../../../core/providers/spinner.provider';
import {NewsArticleModel} from '../../../../../../models/news/model/news-article.model';
import {NewsProvider} from '../../../../providers/news.provider';
import {ApiCommand, ApiResponse} from '../../../../../../models/base/api.model';
import {NewsArticleSaveCommand} from '../../../../../../models/news/command/save/news-article-save.command';
import {finalize, takeUntil} from 'rxjs/operators';
import {MainComponent} from '../../../../../../core/main.component';

@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.css']
})
export class CreateNewsComponent extends MainComponent implements OnInit {
  form: FormGroup;

  constructor(private spinnerProvider: SpinnerProvider, private newsProvider: NewsProvider) {
    super();
  }

  ngOnInit(): void {
  }

  onSaveArticle(incomingForm: FormGroup): void {
    console.log(new ApiCommand<NewsArticleSaveCommand>(NewsArticleSaveCommand.fromObject(incomingForm.value)));
    console.log('save');

    this.spinnerProvider.showSpinner();
    this.newsProvider
      .saveTourismArticle(new ApiCommand<NewsArticleSaveCommand>(NewsArticleSaveCommand.fromObject(incomingForm.value)))
      .pipe(
        takeUntil(this.unsubscribe),
        finalize(() => {
          this.spinnerProvider.showSpinner(false);
        })
      )
      .subscribe((response: ApiResponse<any>) => {
        if (response.success) {
          // this.notification.success(this.translation.translate('common.success'),
          //   this.translation.translate('common.action.success'));
        } else {
          // this.notification.error(this.translation.translate('common.error'), response.error.message);
        }
      });
  }


}
