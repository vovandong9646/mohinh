import callApi from './../utils/callApi.js';

export const actFetchProductRequest = () => {
	return (dispatch) => {
		return callApi('products', 'GET', null).then(res=>{
			dispatch(actFetchProduct(res.data));
		});
	};
}

export const actFetchProduct = (products) => {
	return {
		type: 'FETCH_ALL_PRODUCT',
		products
	}
}

export const actFetchDelProductRequest = (id) => {
	return (dispatch) => {
		return callApi(`/products/${id}`, 'DELETE', null).then(res=>{
			dispatch(actFetchDelProduct(id));
		});
	}
}

export const actFetchDelProduct = (id) => {
	return {
		type: 'FETCH_DELETE',
		id
	}
}

export const actFetchAddProductRequest = (product) => {
	return (dispatch) => {
		return callApi(`/products`, 'POST', product).then(res=>{
			dispatch(actFetchAddProduct(res.data));
		});
	}
}

export const actFetchAddProduct = (product) => {
	return {
		type: 'FETCH_ADD',
		product
	}
}

export const actFetchEditProductRequest = (id) => {
	return (dispatch) => {
		return callApi(`/products/${id}`, 'GET', null).then(res=>{
			dispatch(actFetchEditProduct(res.data));
		});
	}
}

export const actFetchEditProduct = (product) => {
	return {
		type: 'FETCH_EDIT',
		product
	}
}

export const actFetchUpdateProductRequest = (product) => {
	return (dispatch) => {
		return callApi(`/products/${product.id}`, 'PUT', product).then(res=>{
			dispatch(actFetchUpdateProduct(res.data));
		});
	}
}

export const actFetchUpdateProduct = (product) => {
	return {
		type: 'FETCH_UPDATE',
		product
	}
}