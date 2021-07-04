import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {filter, finalize, takeUntil} from 'rxjs/operators';
import {ApiPageCommand, ApiResponse} from '../../models/base/api.model';
import {NewsFilterCommand} from '../../models/news/command/filter/news-filter.command';
import {NewsArticleModel} from '../../models/news/model/news-article.model';
import {PaginationSortModel} from '../../models/base/pagination-sort.model';
import {SpinnerProvider} from '../../core/providers/spinner.provider';
import {NewsProvider} from './providers/news.provider';
import {MainComponent} from '../../core/main.component';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent extends MainComponent implements OnInit {
  mockUrl = [
    {url: 'tourism', name: 'Turizam'},
    {url: 'politics', name: 'Politika'},
    {url: 'culture', name: 'Kultura'},
    {url: 'inheritance', name: 'Baština'},
    {url: 'sport', name: 'Sport'},
    {url: 'entertainment', name: 'Zabava'}
  ];
  imageSlider = [
    {image: 'https://images.squarespace-cdn.com/content/v1/5f21b11aaf514f59e25e0dfa/1596126419368-1C8987NZNDXA5P4PFO25/ke17ZwdGBToddI8pDm48kDk1dm1oSR9gCa1mX4KqzjN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0luj0xCD0oh5KMc0gpox0u-wQWxfQHg04OxgQwaUq2yiAcNt5Kg2tE9yEtYfM4xwaw/image-asset.jpeg?format=2500w'},
    {image: 'https://eco-business.imgix.net/ebmedia/fileuploads/Feature_RightsofNature_inline2.jpg?fit=crop&h=801&ixlib=django-1.2.0&q=85&w=1200'},
    {image: 'https://566259-1826367-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/01/turkey-3048299_1920-1366x550.jpg'}
  ];
  imageSideTop = [
    {image: 'https://images.squarespace-cdn.com/content/v1/5f21b11aaf514f59e25e0dfa/1596126419368-1C8987NZNDXA5P4PFO25/ke17ZwdGBToddI8pDm48kDk1dm1oSR9gCa1mX4KqzjN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0luj0xCD0oh5KMc0gpox0u-wQWxfQHg04OxgQwaUq2yiAcNt5Kg2tE9yEtYfM4xwaw/image-asset.jpeg?format=2500w'},
    {image: 'https://eco-business.imgix.net/ebmedia/fileuploads/Feature_RightsofNature_inline2.jpg?fit=crop&h=801&ixlib=django-1.2.0&q=85&w=1200'},
  ];

  activeCategory = 'all-news';
  pagination: PaginationSortModel = PaginationSortModel.createDefaultPaginationSortCommand();
  newsArticles: NewsArticleModel[];

  constructor(private spinnerProvider: SpinnerProvider,
              private newsProvider: NewsProvider,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    super();
  }

  ngOnInit(): void {
    // this.activatedRoute.queryParams.subscribe(queryParams => {
    //   if (queryParams.category) {
    //     // this.router.navigate(['all-news'], {relativeTo: this.activatedRoute});
    //   } else {
    //     // this.router.navigate(['.'], {relativeTo: this.activatedRoute});
    //   }
    //   console.log(queryParams);
    //   console.log(this.router.url);
    // });
  }


  // changeCategory(category: string): void {
  //   this.activeCategory = category;
  //   this.fetchNews();
  // }


  fetchNews(): void {
    this.spinnerProvider.showSpinner();
    this.newsProvider.fetchNews(new ApiPageCommand(this.pagination, NewsFilterCommand.fromObject({category: this.activeCategory})))
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
