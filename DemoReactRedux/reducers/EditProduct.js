var initialState = {};

var myReducer = (state=initialState, action) => {
	switch (action.type) {
		case 'FETCH_EDIT':
			return action.product;
		default:
			return [...state];
	}
}

export default myReducer;