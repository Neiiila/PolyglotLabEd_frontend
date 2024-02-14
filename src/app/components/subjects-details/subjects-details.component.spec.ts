import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsDetailsComponent } from './subjects-details.component';

describe('SubjectsDetailsComponent', () => {
  let component: SubjectsDetailsComponent;
  let fixture: ComponentFixture<SubjectsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubjectsDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubjectsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
