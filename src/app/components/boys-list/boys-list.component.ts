import { Component } from '@angular/core';
import {Boy} from '../../models/boy.model';
import {BoysService} from '../../services/boys.service';

@Component({
  selector: 'app-boys-list',
  standalone: false,

  templateUrl: './boys-list.component.html',
  styleUrl: './boys-list.component.css'
})

export class BoysListComponent {
  boys?: Boy[];
  currentBoy: Boy = {};
  currentIndex = -1;
  type = '';

  constructor(private boysService: BoysService) {
  }

  ngOnInit() : void {
    this.retrieveBoys();
  }

  retrieveBoys(): void{
    this.boysService.getAll()
      .subscribe({
        next: (data) => {
          this.boys = data;
          console.log(data);
        },
          error: (e) => console.error(e)
      })
  }

  refreshList(): void {
    this.retrieveBoys();
    this.currentBoy = {};
    this.currentIndex = -1;
  }

  setActiveBoy(boy: Boy, index: number) : void {
    this.currentBoy = boy;
    this.currentIndex = index;
  }

  removeAllBoys(): void {
    this.boysService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      })
  }




}
