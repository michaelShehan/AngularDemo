import { Component, OnInit} from "@angular/core";
import {FormGroup, FormBuilder } from '@angular/forms';
import { WeatherService } from './weather.service';
import { WeatherItem } from './weather-item';
import { Subject } from 'rxjs/Subject';

@Component({
    selector: 'my-weather-search',
    template: `
        <section class="weather-search">
        <form (ngSubmit)="onSubmit()">
            <div class="row">
                <div class="col-md-2">
                    <label for="txtCity">City</label>
                </div>
                <div class="col-md-6">
                    <input ngModel name="location" type="text" id="txtCity" required class="form-control" (input)="onSearchLocation(input.value)" #input />
                </div>
                <div class="col-md-2">
                    <button type="submit" class="btn btn-success">Add City</button>
                </div> <div class="col-md-2">
                    <button class="btn btn-danger" (click)="clearWeatherItems()">Clear List</button>
                </div>
            </div>
        </form>
        <div class="row">
            <div class="col-md-12 selected-city">
                <span class="title">City found:</span> {{data.name}}
            </div>
        </div>
        </section>
    `,
    styleUrls: ['weather-app.component.sass']
})

export class WeatherSearchComponent implements OnInit{
    private searchStream = new Subject<string>();
    constructor (private _WeatherService: WeatherService){};
    data: any = {};
    
    onSubmit(){
        const weatherItem = new WeatherItem(this.data.name, this.data.weather[0].description, this.data.main.temp);
        this._WeatherService.addWeatherItems(weatherItem);
    }
    
    onSearchLocation(cityName: string){
        this.searchStream.next(cityName);
    }
    
    clearWeatherItems(){
        console.log("hit");
        this._WeatherService.clearWeatherItems();
    }
    ngOnInit() {
        this.searchStream
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap((input:string) => this._WeatherService.searchWeatherData(input))
            .subscribe(
              data => this.data = data
            );
    }
}