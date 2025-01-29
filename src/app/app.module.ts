import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddGirlComponent } from './components/add-girl/add-girl.component';
import { GirlsDetailsComponent } from './components/girls-details/girls-details.component';
import { GirlsListComponent } from './components/girls-list/girls-list.component';
import { FormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AddDance_groupComponent } from './components/add-dance_group/add-dance_group.component';
import { Dance_groupsDetailsComponent } from './components/dance_groups-details/dance_groups-details.component';
import { Dance_groupsListComponent } from './components/dance_groups-list/dance_groups-list.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { BoysListComponent } from './components/boys-list/boys-list.component';
import { BoysDetailsComponent } from './components/boys-details/boys-details.component';
import { AddBoyComponent } from './components/add-boy/add-boy.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AddGirlComponent,
    GirlsDetailsComponent,
    GirlsListComponent,
    AddDance_groupComponent,
    Dance_groupsDetailsComponent,
    Dance_groupsListComponent,
    BoysListComponent,
    BoysDetailsComponent,
    AddBoyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgMultiSelectDropDownModule.forRoot(),
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
