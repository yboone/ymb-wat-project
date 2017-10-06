import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinitModeComponent } from './finit-mode.component';

describe('FinitModeComponent', () => {
  let component: FinitModeComponent;
  let fixture: ComponentFixture<FinitModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinitModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinitModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
