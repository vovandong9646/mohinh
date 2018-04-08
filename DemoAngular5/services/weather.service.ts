import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WeatherService {

	private API : string = "http://api.openweathermap.org/data/2.5/weather?appid=c1453b660974a99dc1db43c09198b321&q=";


	constructor(
		private http : HttpClient
	) { }

	getWeather(city: string) {
		return this.http.get(this.API + city);
	}

}
