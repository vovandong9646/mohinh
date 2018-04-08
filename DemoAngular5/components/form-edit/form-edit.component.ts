import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './../../models/product.class';
import { ProductServiceService } from './../../services/product-service.service';
import { Subscription } from 'rxjs/subscription';

@Component({
	selector: 'app-form-edit',
	templateUrl: './form-edit.component.html',
	styleUrls: ['./form-edit.component.css']
})
export class FormEditComponent implements OnInit, OnDestroy {

	private subscription : Subscription;	
	private productEdit : Subscription;
	private product : Product;

	constructor(
		private productService : ProductServiceService,
		private activatedRoute : ActivatedRoute,
		private routerService  : Router
	) { }

	ngOnInit() {
		this.product = new Product();
		this.productEdit = this.activatedRoute.params.subscribe(data=>{
			this.subscription = this.productService.getProductById(data.id).subscribe((data : Product)=>{
				this.product = data;
			}, err=> {
				console.log(err);
			});
		});
	}

	onEditForm() {
		this.subscription = this.productService.getUpdateProduct(this.product).subscribe(data=>{
			this.routerService.navigateByUrl("products");
		}, (err) => {
			console.log(err);
		});
	}

	ngOnDestroy() {
		if(this.subscription) {
			this.subscription.unsubscribe();
		}
		if(this.productEdit) {
			this.productEdit.unsubscribe();
		}
	}


}
