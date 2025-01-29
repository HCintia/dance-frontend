import { Component } from '@angular/core';
import { Girl } from '../../models/girl.model';
import { GirlsService } from '../../services/girls.service';
import {Dance_groupsService} from '../../services/dance_groups.service';
import {DanceGroup} from '../../models/dance_group.model';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-add-girl',
  standalone: false,

  templateUrl: './add-girl.component.html',
  styleUrl: './add-girl.component.css'
})
export class AddGirlComponent {
  girl: Girl = {
    id: 0,
    g_name: '',
    g_b_year: '',
    dance_group: []
  };
  dropdownList: DanceGroup[] = [];
  selectedDance_Groups?: DanceGroup[] = [];
  dropdownSettings: IDropdownSettings = {};

  submitted = false;

  constructor(private girlsService: GirlsService, private Dance_groupsService: Dance_groupsService) { }

  ngOnInit() : void {
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
    this.Dance_groupsService.getAll()
      .subscribe({
        next: (data) => {
          this.dropdownList = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  saveGirl(): void {
    this.girl.dance_group = this.selectedDance_Groups
    this.girlsService.create(this.girl)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newGirl(): void {
    this.submitted = false;
    this.girl = {
      id: 0,
      g_name: '',
      g_b_year: '',
      dance_group: []
    };
  }
  onItemSelect(item: any) {
    console.log(item);
  }

}
