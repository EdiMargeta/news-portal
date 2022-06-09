import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-cover',
  templateUrl: './main-cover.component.html',
  styleUrls: ['./main-cover.component.css']
})
export class MainCoverComponent implements OnInit {
 @Input() imageSlider: any[];
  @Input() imageSideTop: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
