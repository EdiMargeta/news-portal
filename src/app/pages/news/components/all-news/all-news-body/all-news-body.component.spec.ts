import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllNewsBodyComponent } from './all-news-body.component';

describe('AllNewsBodyComponent', () => {
  let component: AllNewsBodyComponent;
  let fixture: ComponentFixture<AllNewsBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllNewsBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllNewsBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
