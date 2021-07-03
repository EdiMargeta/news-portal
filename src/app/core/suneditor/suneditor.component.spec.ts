import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuilEditorComponent } from './suneditor.component';

describe('QuilEditorComponent', () => {
  let component: QuilEditorComponent;
  let fixture: ComponentFixture<QuilEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuilEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuilEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
