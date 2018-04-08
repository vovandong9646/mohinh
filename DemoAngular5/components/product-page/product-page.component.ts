import { Component, OnInit,OnDestroy } from '@angular/core';
import { ProductServiceService } from './../../services/product-service.service';
import { Product } from './../../models/product.class';
import { Subscription } from 'rxjs/subscription';

@Component({
	selector: 'app-product-page',
	templateUrl: './product-page.component.html',
	styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit, OnDestroy {

	private products : Product[];
	private subscription : Subscription;

	constructor(
		private productService : ProductServiceService
		) { }

	ngOnInit() {
		this.subscription = this.productService.getAllProduct().subscribe(data=>{
			return this.products = data;
		}, err => {
			console.log("Error: " + err.statusText);
		});
	}

	findIndex(id) {
		let result = null;
		for(let i=0;i<this.products.length;i++) {
			if(this.products[i].id === id) {
				result = i;
				break;
			}
		}
		return result;
	}

	onHandleDelete(id) {

		this.subscription = this.productService.getDeleteProduct(id).subscribe(data=>{
			let index = this.findIndex(id);
			this.products.splice(index, 1);
		}, err=>{
			console.log(err);
		});
	}

	ngOnDestroy() {
		if(this.subscription) {
			this.subscription.unsubscribe();
		}
	}

}
