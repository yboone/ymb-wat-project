import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicModeComponent } from './pic-mode.component';

describe('PicModeComponent', () => {
  let component: PicModeComponent;
  let fixture: ComponentFixture<PicModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
