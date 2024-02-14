import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseExperienceComponent } from './course-experience.component';

describe('CourseExperienceComponent', () => {
  let component: CourseExperienceComponent;
  let fixture: ComponentFixture<CourseExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseExperienceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
