import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportlistsComponent } from './sportlists.component';

describe('SportlistsComponent', () => {
  let component: SportlistsComponent;
  let fixture: ComponentFixture<SportlistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportlistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportlistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
