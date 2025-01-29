import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GirlsDetailsComponent } from './girls-details.component';

describe('GirlsDetailsComponent', () => {
  let component: GirlsDetailsComponent;
  let fixture: ComponentFixture<GirlsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GirlsDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GirlsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
