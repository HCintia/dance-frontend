import { Component } from '@angular/core';
import { Girl } from '../../models/girl.model';
import { GirlsService } from '../../services/girls.service';

@Component({
  selector: 'app-girls-list',
  standalone: false,
  templateUrl: './girls-list.component.html',
  styleUrl: './girls-list.component.css'
})
export class GirlsListComponent {
  girls?: Girl[];
  currentGirl: Girl = {};
  currentIndex = -1;
  type = '';

  constructor(private girlsService: GirlsService) { }

  ngOnInit() : void {
    this.retrieveGirls();
  }

  retrieveGirls(): void {
    this.girlsService.getAll()
      .subscribe({
        next: (data) => {
          this.girls = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveGirls();
    this.currentGirl = {};
    this.currentIndex = -1;
  }

  setActiveGirl(girl: Girl, index: number) : void {
    this.currentGirl = girl;
    this.currentIndex = index;
  }

  removeAllGirls(): void {
    this.girlsService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

}
