import {Component, OnInit} from '@angular/core';
import {Profile} from "./profile";
import {ProfileService} from "./profile.service";
import { WeatherService } from './weather.service';
import { WeatherItem } from './weather-item';

@Component({
    selector: 'my-sidebar',
    template: `
        <div class="card bg-light mb-3">
          <div class="card-body">
            <h4 class="card-title">Saved Profiles</h4>
            <button (click)="onSaveNew()" class="btn btn-primary">Save list to profile</button>
            <article class="profile-list-item" *ngFor="let pi of profiles" (click)="onLoadProfile(pi)" >
                <div class="row">
                    <div class="col-lg-8">
                        <h5>{{ pi.profileName}}</h5>
                        <p>{{ pi.cities.join(', ')}}</p>
                    </div>
                    <div class="col-lg-4 text-right">
                        <a href="javascript:void(0)" class="btn btn-danger" (click)="onDeleteProfile($event, pi)">X</a>
                    </div>
                </div>
            </article>
          </div>
        </div>
    
    `,
    styleUrls: ['weather-app.component.sass'],
    providers: [ProfileService]
})

export class SideBarComponent implements OnInit{
    profiles: Profile[];
    
    constructor (private _profileService: ProfileService, private _weatherService: WeatherService){}
    
    onSaveNew(){
        const cities = this._weatherService.getWeatherItems().map(function(element: WeatherItem){
            return element.cityName
        });  
        this._profileService.saveNewProfiles(cities);
    }
    
    onDeleteProfile(event: Event, profile: Profile){
        event.stopPropagation();
        this._profileService.deleteProfile(profile);
    }
    
    onLoadProfile(profile: Profile){
        this._weatherService.clearWeatherItems();
        for(let i = 0; i < profile.cities.length; i++){
            this._weatherService.searchWeatherData(profile.cities[i]).retry()
            .subscribe(
                data => {
                    const weatherItem = new WeatherItem(data.name, data.weather[0].description, data.main.temp);
                    this._weatherService.addWeatherItems(weatherItem);
                }
            )
        }
    }
    
    ngOnInit(){
        this.profiles = this._profileService.getProfiles()
    }
}