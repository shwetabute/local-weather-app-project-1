import { Component, OnInit } from '@angular/core';
import { IcurrentWeather } from '../icurrent-weather';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  current: IcurrentWeather
  constructor() { 
    this.current = {
      city: 'bethesda',
      country: 'US',
      date: 1485789600,
      image: '',
      temperature: 40,
      description: 'sunny'
    } as IcurrentWeather

  }

  ngOnInit() {
  }

}
