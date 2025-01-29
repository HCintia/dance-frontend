import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDance_groupComponent } from './add-dance_group.component';

describe('AddDance_groupComponent', () => {
  let component: AddDance_groupComponent;
  let fixture: ComponentFixture<AddDance_groupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddDance_groupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDance_groupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
