import {Component, Input, OnInit} from '@angular/core';
import {NewsArticleModel} from '../../../../../models/news/model/news-article.model';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent implements OnInit {
  @Input() bodyImages: NewsArticleModel[];

  constructor() { }

  ngOnInit(): void {
  }

}
