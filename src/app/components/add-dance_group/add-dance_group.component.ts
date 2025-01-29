import { Component } from '@angular/core';
import {DanceGroup} from '../../models/dance_group.model';
import {Dance_groupsService} from '../../services/dance_groups.service';

@Component({
  selector: 'app-add-dancegroup',
  standalone: false,

  templateUrl: './add-dance_group.component.html',
  styleUrl: './add-dance_group.component.css'
})
export class AddDance_groupComponent {
  dance_group: DanceGroup = {
    id: 0,
    name: ''
  };
  submitted = false;

  constructor(private dance_groupsService: Dance_groupsService) {}

  saveDanceGroup(): void {
    this.dance_groupsService.create(this.dance_group)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newDanceGroup(): void {
    this.submitted = false;
    this.dance_group = {
      id: 0,
      name: ''
    };
  }
}
