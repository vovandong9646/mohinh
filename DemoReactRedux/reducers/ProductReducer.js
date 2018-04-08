var initialState = [];
var findIndex = (products,id) => {
	var result = -1;
	products.forEach((product, index)=>{
		if(product.id === id) {
			result = index;
		}
	});
	return result;
}
const myReducer = (state=initialState, action) => {
	switch (action.type) {
		case 'FETCH_ALL_PRODUCT':
			state = action.products;
			return [...state];
		case 'FETCH_DELETE':
			var index = findIndex(state,action.id);
			state.splice(index,1);
			return [...state];
		case 'FETCH_ADD':
			state.push(action.product);
			return [...state];
		case 'FETCH_UPDATE':
			index = findIndex(state, action.product.id);
			state[index] = action.product;
			return [...state];
		default:
			return [...state];
	}
}

export default myReducer;