import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameModeComponent } from './name-mode.component';

describe('NameModeComponent', () => {
  let component: NameModeComponent;
  let fixture: ComponentFixture<NameModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
