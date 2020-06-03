import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyMentorComponent } from './why-mentor.component';

describe('WhyMentorComponent', () => {
  let component: WhyMentorComponent;
  let fixture: ComponentFixture<WhyMentorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyMentorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
