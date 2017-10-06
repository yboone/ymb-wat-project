import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicmodeNavComponent } from './picmode-nav.component';

describe('PicmodeNavComponent', () => {
  let component: PicmodeNavComponent;
  let fixture: ComponentFixture<PicmodeNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicmodeNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicmodeNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
