import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Dance_groupsService} from '../../services/dance_groups.service';
import {DanceGroup} from '../../models/dance_group.model';

@Component({
  selector: 'app-dancegroups-details',
  standalone: false,

  templateUrl: './dance_groups-details.component.html',
  styleUrl: './dance_groups-details.component.css'
})
export class Dance_groupsDetailsComponent {
  @Input() viewMode = false;

  @Input() currentDanceGroup: DanceGroup = {
    id: 0,
    name: ''
  };

  message = '';

  constructor(
    private Dance_groupService: Dance_groupsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() : void {
    if (!this.viewMode) {
      this.message = '';
      this.getDanceGroup(this.route.snapshot.params["id"]);
    }
  }

  getDanceGroup(id: number): void {
    this.Dance_groupService.get(id)
      .subscribe({
        next: (data) => {
          this.currentDanceGroup = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateDanceGroup(): void {
    this.message = '';

    this.Dance_groupService.update(this.currentDanceGroup.id, this.currentDanceGroup)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = 'Dance Group was updated successfully.';
        },
        error: (e) => console.error(e)
      })
  }

  deleteDanceGroup(): void {
    this.Dance_groupService.delete(this.currentDanceGroup.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/dance_groups']);
        },
        error: (e) => console.error(e)
      })
  }
}
