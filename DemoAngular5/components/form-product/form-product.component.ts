import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/subscription';
import { ProductServiceService } from './../../services/product-service.service';
import { Product } from './../../models/product.class';

// Router dung de redirect , activedRouter => dung de lay id tu url
// Nó là Service nên phải khai báo ở constructor để gọi
import { Router } from '@angular/router';

@Component({
	selector: 'app-form-product',
	templateUrl: './form-product.component.html',
	styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit, OnDestroy {

	private subscription : Subscription;
	private product : Product;
	private checkNull : string;

	constructor(
		private productService : ProductServiceService,
		private routerService : Router
	) { }

	ngOnInit() {
		this.product = new Product();
	}

	// Ham này dùng để add Product
	onActionForm() {
		if(this.product.name && this.product.price) {
			this.checkNull = '';

			// call service chứa api để lưu vào api
			this.subscription = this.productService.addProduct(this.product).subscribe(data=>{
				if(data && data.id) {
					this.routerService.navigateByUrl("/products");
				}
			},err=>{
				console.log(err);
			});


		} else {
			this.checkNull = "Vui lòng nhập đầy đủ thông tin !!!";
		}
	}

	// // Hàm này tạo id Ramdom sẽ tạo thành 1 chuỗi có 10 số 
	// rand() {
	// 	return Math.floor((Math.random() + 1) * 0x1000000000).toString(16);
	// }

	// // Nối chuỗi ở ttreen để tạo thành 1 chuỗi dài
	// randomId() {
	// 	return this.rand() + "-" + this.rand() + "-" + this.rand() + "-" + this.rand() + "-" + this.rand(); 
	// }

	// // Hàm này dùng để lấy id cuối cùng + 1
	// getId(products) {
	// 	let id = (products.length > 0) ? (products.sort((a,b)=>{
	// 		if(a.id > b.id) return -1;
	// 		else if(a.id < b.id) return 1;
	// 		return 0;
	// 	})[0].id + 1) : 1;
	// 	return id;
	// }

	ngOnDestroy() {
		if(this.subscription) {
			this.subscription.unsubscribe();
		}
	}

}
