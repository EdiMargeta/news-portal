import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-abstract-news',
  templateUrl: './abstract-news.component.html',
  styleUrls: ['./abstract-news.component.css']
})
export class AbstractNewsComponent implements OnInit {
  array = [1, 2, 3, 4];

  imageSlider = [
    { image: 'https://images.squarespace-cdn.com/content/v1/5f21b11aaf514f59e25e0dfa/1596126419368-1C8987NZNDXA5P4PFO25/ke17ZwdGBToddI8pDm48kDk1dm1oSR9gCa1mX4KqzjN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0luj0xCD0oh5KMc0gpox0u-wQWxfQHg04OxgQwaUq2yiAcNt5Kg2tE9yEtYfM4xwaw/image-asset.jpeg?format=2500w' },
    { image: 'https://eco-business.imgix.net/ebmedia/fileuploads/Feature_RightsofNature_inline2.jpg?fit=crop&h=801&ixlib=django-1.2.0&q=85&w=1200' },
    { image: 'https://566259-1826367-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/01/turkey-3048299_1920-1366x550.jpg' }
  ];

  imageSideTop = [
    { image: 'https://images.squarespace-cdn.com/content/v1/5f21b11aaf514f59e25e0dfa/1596126419368-1C8987NZNDXA5P4PFO25/ke17ZwdGBToddI8pDm48kDk1dm1oSR9gCa1mX4KqzjN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0luj0xCD0oh5KMc0gpox0u-wQWxfQHg04OxgQwaUq2yiAcNt5Kg2tE9yEtYfM4xwaw/image-asset.jpeg?format=2500w' },
    { image: 'https://eco-business.imgix.net/ebmedia/fileuploads/Feature_RightsofNature_inline2.jpg?fit=crop&h=801&ixlib=django-1.2.0&q=85&w=1200' },
  ];

  bodyImages = [
    { image: 'https://images.squarespace-cdn.com/content/v1/5f21b11aaf514f59e25e0dfa/1596126419368-1C8987NZNDXA5P4PFO25/ke17ZwdGBToddI8pDm48kDk1dm1oSR9gCa1mX4KqzjN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0luj0xCD0oh5KMc0gpox0u-wQWxfQHg04OxgQwaUq2yiAcNt5Kg2tE9yEtYfM4xwaw/image-asset.jpeg?format=2500w' },
    { image: 'https://eco-business.imgix.net/ebmedia/fileuploads/Feature_RightsofNature_inline2.jpg?fit=crop&h=801&ixlib=django-1.2.0&q=85&w=1200' },
    { image: 'https://images.squarespace-cdn.com/content/v1/5f21b11aaf514f59e25e0dfa/1596126419368-1C8987NZNDXA5P4PFO25/ke17ZwdGBToddI8pDm48kDk1dm1oSR9gCa1mX4KqzjN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0luj0xCD0oh5KMc0gpox0u-wQWxfQHg04OxgQwaUq2yiAcNt5Kg2tE9yEtYfM4xwaw/image-asset.jpeg?format=2500w' },
    { image: 'https://eco-business.imgix.net/ebmedia/fileuploads/Feature_RightsofNature_inline2.jpg?fit=crop&h=801&ixlib=django-1.2.0&q=85&w=1200' },
    { image: 'https://images.squarespace-cdn.com/content/v1/5f21b11aaf514f59e25e0dfa/1596126419368-1C8987NZNDXA5P4PFO25/ke17ZwdGBToddI8pDm48kDk1dm1oSR9gCa1mX4KqzjN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0luj0xCD0oh5KMc0gpox0u-wQWxfQHg04OxgQwaUq2yiAcNt5Kg2tE9yEtYfM4xwaw/image-asset.jpeg?format=2500w' },
    { image: 'https://eco-business.imgix.net/ebmedia/fileuploads/Feature_RightsofNature_inline2.jpg?fit=crop&h=801&ixlib=django-1.2.0&q=85&w=1200' },
    { image: 'https://images.squarespace-cdn.com/content/v1/5f21b11aaf514f59e25e0dfa/1596126419368-1C8987NZNDXA5P4PFO25/ke17ZwdGBToddI8pDm48kDk1dm1oSR9gCa1mX4KqzjN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0luj0xCD0oh5KMc0gpox0u-wQWxfQHg04OxgQwaUq2yiAcNt5Kg2tE9yEtYfM4xwaw/image-asset.jpeg?format=2500w' },
    { image: 'https://eco-business.imgix.net/ebmedia/fileuploads/Feature_RightsofNature_inline2.jpg?fit=crop&h=801&ixlib=django-1.2.0&q=85&w=1200' },
    { image: 'https://images.squarespace-cdn.com/content/v1/5f21b11aaf514f59e25e0dfa/1596126419368-1C8987NZNDXA5P4PFO25/ke17ZwdGBToddI8pDm48kDk1dm1oSR9gCa1mX4KqzjN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0luj0xCD0oh5KMc0gpox0u-wQWxfQHg04OxgQwaUq2yiAcNt5Kg2tE9yEtYfM4xwaw/image-asset.jpeg?format=2500w' },
    { image: 'https://eco-business.imgix.net/ebmedia/fileuploads/Feature_RightsofNature_inline2.jpg?fit=crop&h=801&ixlib=django-1.2.0&q=85&w=1200' },
    { image: 'https://images.squarespace-cdn.com/content/v1/5f21b11aaf514f59e25e0dfa/1596126419368-1C8987NZNDXA5P4PFO25/ke17ZwdGBToddI8pDm48kDk1dm1oSR9gCa1mX4KqzjN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0luj0xCD0oh5KMc0gpox0u-wQWxfQHg04OxgQwaUq2yiAcNt5Kg2tE9yEtYfM4xwaw/image-asset.jpeg?format=2500w' },
    { image: 'https://eco-business.imgix.net/ebmedia/fileuploads/Feature_RightsofNature_inline2.jpg?fit=crop&h=801&ixlib=django-1.2.0&q=85&w=1200' },
    { image: 'https://images.squarespace-cdn.com/content/v1/5f21b11aaf514f59e25e0dfa/1596126419368-1C8987NZNDXA5P4PFO25/ke17ZwdGBToddI8pDm48kDk1dm1oSR9gCa1mX4KqzjN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0luj0xCD0oh5KMc0gpox0u-wQWxfQHg04OxgQwaUq2yiAcNt5Kg2tE9yEtYfM4xwaw/image-asset.jpeg?format=2500w' },
    { image: 'https://eco-business.imgix.net/ebmedia/fileuploads/Feature_RightsofNature_inline2.jpg?fit=crop&h=801&ixlib=django-1.2.0&q=85&w=1200' },
    { image: 'https://images.squarespace-cdn.com/content/v1/5f21b11aaf514f59e25e0dfa/1596126419368-1C8987NZNDXA5P4PFO25/ke17ZwdGBToddI8pDm48kDk1dm1oSR9gCa1mX4KqzjN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0luj0xCD0oh5KMc0gpox0u-wQWxfQHg04OxgQwaUq2yiAcNt5Kg2tE9yEtYfM4xwaw/image-asset.jpeg?format=2500w' },
    { image: 'https://eco-business.imgix.net/ebmedia/fileuploads/Feature_RightsofNature_inline2.jpg?fit=crop&h=801&ixlib=django-1.2.0&q=85&w=1200' },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
