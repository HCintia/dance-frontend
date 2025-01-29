import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GirlsListComponent } from './components/girls-list/girls-list.component';
import { GirlsDetailsComponent } from './components/girls-details/girls-details.component';
import { AddGirlComponent } from './components/add-girl/add-girl.component';
import { Dance_groupsListComponent } from './components/dance_groups-list/dance_groups-list.component';
import { Dance_groupsDetailsComponent } from './components/dance_groups-details/dance_groups-details.component';
import { AddDance_groupComponent } from './components/add-dance_group/add-dance_group.component';
import {BoysListComponent} from './components/boys-list/boys-list.component';
import {BoysDetailsComponent} from './components/boys-details/boys-details.component';
import {AddBoyComponent} from './components/add-boy/add-boy.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'girls', component: GirlsListComponent },
  { path: 'girls/:id', component: GirlsDetailsComponent },
  { path: 'add-girl', component: AddGirlComponent},
  { path: 'boys', component: BoysListComponent },
  { path: 'boys/:id', component: BoysDetailsComponent },
  { path: 'add-boy', component: AddBoyComponent },
  { path: 'dance_groups', component: Dance_groupsListComponent },
  { path: 'dance_groups/:id', component: Dance_groupsDetailsComponent },
  { path: 'add-dance_group', component: AddDance_groupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
