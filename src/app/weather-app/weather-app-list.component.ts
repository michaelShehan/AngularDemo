import { Component, OnInit } from "@angular/core";
import { WeatherItemComponent } from "./weather-app-item.component";
import { WeatherItem } from './weather-item';
import { WEATHER_ITEMS } from './weather.data';
import { WeatherService } from './weather.service';


@Component({
    selector: 'weather-app-list',
    template: `
        <section class="weather-list">
            <!--<div class="row" style="margin-bottom: 20px">
                <div class="col text-right">
                    <button class="btn btn-danger" (click)="clearWeatherItems()">Clear List</button>
                </div>
            </div>-->
            <weather-app-item *ngFor="let wItems of weatherItems" [weatherItem]="wItems"></weather-app-item>
        </section>    
    `,
    styleUrls: ['weather-app.component.sass']
})

export class WeatherListComponent implements OnInit{
    weatherItems: WeatherItem[];
    
    constructor(private _weatherService: WeatherService){}
    /*
    clearWeatherItems(){
        this._weatherService.clearWeatherItems();
    } */
    
    ngOnInit(): any{
        this.weatherItems = this._weatherService.getWeatherItems();
    }
}