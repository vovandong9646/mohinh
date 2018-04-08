import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { News } from './../models/news.class';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CallPhpService {

	private API : string = "http://localhost/demo/server/products.php?news=";

  constructor(
  	private http : HttpClient
  ) { }


  getAllNews() {
  	return this.http.get(`${this.API}all`);
  }

}
