import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBoyComponent } from './add-boy.component';

describe('AddBoyComponent', () => {
  let component: AddBoyComponent;
  let fixture: ComponentFixture<AddBoyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddBoyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
