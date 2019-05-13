import { Component, OnInit } from '@angular/core';
import {WeatherListComponent} from './weather-app-list.component';
import { WeatherSearchComponent } from './weather-search.component';
import { SideBarComponent } from './sidebar.component';

@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.sass']
})
export class WeatherAppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
