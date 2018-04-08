import { Injectable } from '@angular/core';
import { Product } from './../models/product.class';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductServiceService {

	private API : string = "http://5a59baf3bc6e340012a0375c.mockapi.io/api/products";

	constructor(
		private http : HttpClient
	) { }

	getAllProduct() {
		return this.http.get<Product[]>(this.API);
	}

	getDeleteProduct(id) {
		return this.http.delete<Product>(`${this.API}/${id}`);
	}

	addProduct(product: Product) {
		return this.http.post<Product>(this.API, product);
	}

	getProductById(id) {
		return this.http.get<Product>(`${this.API}/${id}`);
	}

	getUpdateProduct(product: Product) {
		return this.http.put<Product>(`${this.API}/${product.id}`,product);
	}
}
