import {Component} from '@angular/core';
import { WeatherItem } from './weather-item';
import { WeatherService } from './weather.service';

@Component({
    selector: 'weather-app-item',
    template: `
        <article class="weather-element">
            <div class="row">
                <div class="col text-right">
                    <span (click)="deleteWeatherItem(weatherItem)">X</span>
                </div>
            </div>
            <div class="row">
                <div class="col-md-8">
                    <h3>{{ weatherItem.cityName }}</h3>
                    <p class="info">{{ weatherItem.description }}</p>
                </div>
                <div class="col-md-4 text-right">
                    <span class="temp">{{ weatherItem.temperature }}&deg;C</span>
                </div>
            </div>
        </article>
    `,
    styleUrls: ['weather-app.component.sass'],
    inputs: ['weatherItem']
})

export class WeatherItemComponent{
    weatherItem: WeatherItem;
    
    constructor(private _weatherService: WeatherService){}
    
    deleteWeatherItem(weatherItem: WeatherItem){
        this._weatherService.deleteWeatherItem(weatherItem);
    }
   
}
