import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamModeComponent } from './team-mode.component';

describe('TeamModeComponent', () => {
  let component: TeamModeComponent;
  let fixture: ComponentFixture<TeamModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
