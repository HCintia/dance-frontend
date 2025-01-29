import {Component, Input, OnInit} from '@angular/core';
import {Boy} from '../../models/boy.model';
import {BoysService} from '../../services/boys.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-boys-details',
  standalone: false,

  templateUrl: './boys-details.component.html',
  styleUrl: './boys-details.component.css'
})
export class BoysDetailsComponent {
  @Input() viewMode = false;

  @Input() currentBoy: Boy = {
    id: 0,
    b_name:'',
    b_b_year:'',
    dance_group:[]
  }


  message = '';

  constructor(
    private boysService: BoysService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() : void {
    if (!this.viewMode) {
      this.message = '';
      this.getBoy(this.route.snapshot.params["id"]);
    }
  }


  getBoy(id: number): void {
    this.boysService.get(id)
      .subscribe({
        next: (data) => {
          this.currentBoy = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateBoy(): void {
    this.message = '';
    this.boysService.update(this.currentBoy.id, this.currentBoy)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = 'Boy details was updated successfully.';
        },
        error: (e) => console.error(e)
      })
  }

  deleteBoy(): void {
    this.boysService.delete(this.currentBoy.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/boys']);
        },
      })
  }


}
