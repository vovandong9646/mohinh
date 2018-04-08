import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../../services/weather.service';

@Component({
	selector: 'app-call-weather',
	templateUrl: './call-weather.component.html',
	styleUrls: ['./call-weather.component.css']
})
export class CallWeatherComponent implements OnInit {

	private city: string;

	private showTemp : string;

	constructor(
		private weatherService : WeatherService
	) { }

	ngOnInit() {
	}


	getApiWeather() {
		this.weatherService.getWeather(this.city).subscribe(data=>{
			this.city = "";
			//this.showTemp = data.main.temp;
		},err=>{
			this.city = "";
			this.showTemp = err.statusText;
		});
	}

}
