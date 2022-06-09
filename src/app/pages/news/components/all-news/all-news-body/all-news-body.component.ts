import {Component, Input, OnInit} from '@angular/core';
import {NewsArticleModel} from '../../../../../models/news/model/news-article.model';

@Component({
  selector: 'app-all-news-body',
  templateUrl: './all-news-body.component.html',
  styleUrls: ['./all-news-body.component.css']
})
export class AllNewsBodyComponent implements OnInit {
  @Input() newsArticles: NewsArticleModel[];

  tourismNews: NewsArticleModel[];
  politicsNews: NewsArticleModel[];
  cultureNews: NewsArticleModel[];
  inheritenceNews: NewsArticleModel[];
  sportNews: NewsArticleModel[];
  entertainmentNews: NewsArticleModel[];

  constructor() {
  }

  ngOnInit(): void {
  }

  // //TODO, on backend finish changing list to map and test it if it works better then multiple lists
  // // ( the idea is politics = 1 list, tourism = 1 list, to display in html)
  // ngOnInit(): void {
  //   this.newsArticles.forEach( article => {
  //     if(article.category === 'tourism')
  //     {
  //
  //     }
  //   })
  // }

}
