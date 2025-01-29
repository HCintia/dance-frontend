import {Component, Input, OnInit} from '@angular/core';
import {Girl} from '../../models/girl.model';
import {GirlsService} from '../../services/girls.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-girl-details',
  standalone: false,

  templateUrl: './girls-details.component.html',
  styleUrl: './girls-details.component.css'
})
export class GirlsDetailsComponent implements OnInit {
  @Input() viewMode = false;

  @Input() currentGirl: Girl = {
    id: 0,
    g_name: '',
    g_b_year: ''
  };

  message = '';

  constructor(
    private girlsService: GirlsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() : void {
    if (!this.viewMode) {
      this.message = '';
      this.getGirl(this.route.snapshot.params["id"]);
    }
  }

  getGirl(id: number): void {
    this.girlsService.get(id)
      .subscribe({
        next: (data) => {
          this.currentGirl = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateGirl(): void {
    this.message = '';

    this.girlsService.update(this.currentGirl.id, this.currentGirl)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = 'Girl details was updated successfully.';
        },
        error: (e) => console.error(e)
      })
  }

  deleteGirl(): void {
    this.girlsService.delete(this.currentGirl.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/girls']);
        },
        error: (e) => console.error(e)
      })
  }
}
