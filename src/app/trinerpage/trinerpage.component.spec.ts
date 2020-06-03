import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrinerpageComponent } from './trinerpage.component';

describe('TrinerpageComponent', () => {
  let component: TrinerpageComponent;
  let fixture: ComponentFixture<TrinerpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrinerpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrinerpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
