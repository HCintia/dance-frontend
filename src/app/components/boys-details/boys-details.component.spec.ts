import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoysDetailsComponent } from './boys-details.component';

describe('BoysDetailsComponent', () => {
  let component: BoysDetailsComponent;
  let fixture: ComponentFixture<BoysDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoysDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoysDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
