import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NamemodeNavComponent } from './namemode-nav.component';

describe('NamemodeNavComponent', () => {
  let component: NamemodeNavComponent;
  let fixture: ComponentFixture<NamemodeNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NamemodeNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NamemodeNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
