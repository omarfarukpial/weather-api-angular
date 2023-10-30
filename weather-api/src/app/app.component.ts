import { Component} from '@angular/core';
import { DataFetchService } from './data-fetch.service';
import { WeatherData } from './weather-data';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'weather-api';

  weatherData: WeatherData | undefined;
  location: any | undefined;

  private weatherDataSubscription: Subscription | undefined;

  
  constructor(private dataFetchService: DataFetchService) { 

  }

  ngOnInit() {
      this.location = "Dhaka";
  }

  onClick() {

    this.dataFetchService.setLocation(this.location);
    
    this.weatherDataSubscription = this.dataFetchService.getWeatherData().subscribe(
      (data) => {
      this.weatherData = data;
      console.log(this.weatherData);
      }, 
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnDestory() {
    this.weatherDataSubscription?.unsubscribe();
  }


}
