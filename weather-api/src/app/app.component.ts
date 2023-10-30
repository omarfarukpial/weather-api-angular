import { Component} from '@angular/core';
import { DataFetchService } from './data-fetch.service';
import { WeatherData } from './weather-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'weather-api';

  weatherData: WeatherData | undefined;
  location: any | undefined;

  
  constructor(private dataFetchService: DataFetchService) { 

  }

  onClick() {

    this.dataFetchService.setLocation(this.location);
    
    this.dataFetchService.getWeatherData().subscribe((data) => {
      this.weatherData = data;
      console.log(this.weatherData);
      
    });
  }


}
