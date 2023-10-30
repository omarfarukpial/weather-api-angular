import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AsyncSubject, Observable } from 'rxjs';
import { WeatherData } from './weather-data';

@Injectable({
  providedIn: 'root'
})
export class DataFetchService {


  private location: any | undefined;



  constructor(private http: HttpClient) { }

  getWeatherData(): Observable<WeatherData> {
    const weatherApiUrl = `http://api.weatherapi.com/v1/current.json?key=c12372f14fec4d909da63442233010&q=${this.location}&aqi=yes`;
    return this.http.get<WeatherData>(weatherApiUrl);
  }



  setLocation(location: any) {
    this.location = location;
  }

  


}
