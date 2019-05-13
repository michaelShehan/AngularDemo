import { Injectable } from "@angular/core";
import { WEATHER_ITEMS } from './weather.data';
import { Observable } from 'rxjs/Observable';
import {Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { WeatherItem } from './weather-item';

@Injectable()

export class WeatherService{
    
    constructor (private _http: Http){}
    
    getWeatherItems(){
        return WEATHER_ITEMS;
    }
    
    addWeatherItems(weatherItem: WeatherItem){
        WEATHER_ITEMS.push(weatherItem);
    }
    
    clearWeatherItems(){
        WEATHER_ITEMS.splice(0)
    }
    
    deleteWeatherItem(weatherItem: WeatherItem){
        WEATHER_ITEMS.splice(WEATHER_ITEMS.indexOf(weatherItem), 1);
    }
    
    searchWeatherData(cityName: string): Observable<any>{
        return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&APPID=a3b7a07546869d3838880c3e1c3eb269&units=metric')
            .map(this.extractData)
            .catch(this.handleError);
    }
    
    private extractData(res:Response) {
        let body = res.json();
        return body || [];
    }
        
    private handleError(error:any){
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}