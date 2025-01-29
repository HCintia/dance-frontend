import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dance_groupsListComponent } from './dance_groups-list.component';

describe('Dance_groupsListComponent', () => {
  let component: Dance_groupsListComponent;
  let fixture: ComponentFixture<Dance_groupsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Dance_groupsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dance_groupsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
