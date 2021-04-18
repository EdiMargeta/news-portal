import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  activeSection: string;
  mockNews = [
    {name: 'News1'},
    {name: 'News2'},
    {name: 'News2'},
    {name: 'News3'},
    {name: 'News4'},
  ];
  mockUrl = [
    {url: 'tourism', name: 'Turizam'},
    {url: 'politics', name: 'Politika'},
    {url: 'culture', name: 'Kultura'},
    {url: 'inheritance', name: 'Baština'},
    {url: 'sport', name: 'Sport'},
    {url: 'entertainment', name: 'Zabava'}
  ];

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
  }

}
