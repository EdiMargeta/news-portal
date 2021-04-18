import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractNewsComponent } from './abstract-news.component';

describe('AbstractNewsComponent', () => {
  let component: AbstractNewsComponent;
  let fixture: ComponentFixture<AbstractNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbstractNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstractNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
