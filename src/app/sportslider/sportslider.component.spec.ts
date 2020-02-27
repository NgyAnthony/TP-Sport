import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsliderComponent } from './sportslider.component';

describe('SportsliderComponent', () => {
  let component: SportsliderComponent;
  let fixture: ComponentFixture<SportsliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportsliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
