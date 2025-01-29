import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dance_groupsDetailsComponent } from './dance_groups-details.component';

describe('Dance_groupsDetailsComponent', () => {
  let component: Dance_groupsDetailsComponent;
  let fixture: ComponentFixture<Dance_groupsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Dance_groupsDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dance_groupsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
