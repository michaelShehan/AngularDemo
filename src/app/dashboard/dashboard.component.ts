import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

    public dashboardTiles: Array<{tileName: string, tileLink: string, tileColor: string}> = [
        {"tileName": "BMI Calculator", "tileLink": "../bmiCalculator", "tileColor": "blue"},
        {"tileName": "File Reader", "tileLink": "../fileReader", "tileColor": "green"},
        {"tileName": "Form Demo", "tileLink": "../demoForm", "tileColor": "red"},
        {"tileName": "Weather App", "tileLink": "../weatherApp", "tileColor": "orange"},
        {"tileName": "News Reader", "tileLink": "../newsReader", "tileColor": "orange"},];
    
    constructor() { }
    ngOnInit() {
  }

}
