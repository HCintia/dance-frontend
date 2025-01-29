import { Component } from '@angular/core';
import {Boy} from '../../models/boy.model';
import {DanceGroup} from '../../models/dance_group.model';
import {IDropdownSettings} from 'ng-multiselect-dropdown';
import {BoysService} from '../../services/boys.service';
import {Dance_groupsService} from '../../services/dance_groups.service';

@Component({
  selector: 'app-add-boy',
  standalone: false,

  templateUrl: './add-boy.component.html',
  styleUrl: './add-boy.component.css'
})
export class AddBoyComponent {

  boy: Boy = {
    id: 0,
    b_name:'',
    b_b_year:'',
    dance_group:[]
  }

  dropdownList: DanceGroup[] = [];
  selectedDanceGroups: DanceGroup[] = [];
  dropdownSettings: IDropdownSettings = {};

  submitted = false;

  constructor(private boysService: BoysService , private dance_groupsService: Dance_groupsService){}

  ngOnInit(): void{
    this.retrieveDanceGroups();
    this.dropdownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'name',
      itemsShowLimit: 3,
      allowSearchFilter: false
    };
  }

  retrieveDanceGroups(): void {
    this.dance_groupsService.getAll()
      .subscribe({
        next: (data) => {
          this.dropdownList = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  saveBoy(): void {
    this.boy.dance_group = this.selectedDanceGroups
    this.boysService.create(this.boy)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
      })
  }

  newBoy(): void {
    this.submitted = false;
    this.boy = {
      id: 0,
      b_name:'',
      b_b_year:'',
      dance_group:[]
    }
  }

  onItemSelect(item: any) {
    console.log(item);
  }

}
