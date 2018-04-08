import { Component, OnInit } from '@angular/core';
import { CallPhpService } from './../../services/call-php.service';
import { News } from './../../models/news.class';

@Component({
  selector: 'app-demo-call-php',
  templateUrl: './demo-call-php.component.html',
  styleUrls: ['./demo-call-php.component.css']
})
export class DemoCallPhpComponent implements OnInit {

  constructor(
  	private callPHPService: CallPhpService
  ) { }

  ngOnInit() {
  	this.callPHPService.getAllNews().subscribe(data=>{
  		console.log(data);
  	}, err=>{
  		console.log(err);
  	});
  }





}
