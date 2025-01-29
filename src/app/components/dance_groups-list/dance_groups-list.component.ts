import { Component } from '@angular/core';
import {DanceGroup} from '../../models/dance_group.model';
import {Dance_groupsService} from '../../services/dance_groups.service';

@Component({
  selector: 'app-dance_groups-list',
  standalone: false,

  templateUrl: './dance_groups-list.component.html',
  styleUrl: './dance_groups-list.component.css'
})
export class Dance_groupsListComponent {
  dance_groups?: DanceGroup[];
  currentDanceGroup: DanceGroup = {};
  currentIndex = -1;
  name = '';

  constructor(private danceGroupsService: Dance_groupsService) { }

  ngOnInit() : void {
    this.retrieveDanceGroups();
  }

  retrieveDanceGroups(): void {
    this.danceGroupsService.getAll()
      .subscribe({
        next: (data) => {
          this.dance_groups = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveDanceGroups();
    this.currentDanceGroup = {};
    this.currentIndex = -1;
  }

  setActiveDanceGroup(dance_group: DanceGroup, index: number) : void {
    this.currentDanceGroup = dance_group;
    this.currentIndex = index;
  }

  removeAllDanceGroups(): void {
    this.danceGroupsService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

}
