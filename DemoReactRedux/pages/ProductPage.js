import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductList from './../components/ProductList.js';
import ProductItem from './../components/ProductItem';
import Menu from './../components/Menu.js';
import { actFetchProductRequest, actFetchDelProductRequest } from './../actions/index.js';

class ProductPage extends Component {

	componentDidMount() {
		this.props.fetchAllProduct();
	}

  onDelProduct = (id) => {
    this.props.fetchDelProduct(id);
  }

  	showProductList(products) {
  		var result = null;
  		if(products.length > 0) {
  			result = products.map((product,index)=>{
  				return <ProductItem key={index} product={product} onDelProduct={this.onDelProduct}/>
  			});
  		}
  		return result;
  	}

  render() {

    return (
      <div>
      	<Menu />
      	<ProductList>
       		{this.showProductList(this.props.products)}
       	</ProductList>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		products : state.ProductReducer
	}
};

const mapDispatchToProps = (dispatch, props) => {
	return {
		fetchAllProduct : () => {
			dispatch(actFetchProductRequest());
		},
    fetchDelProduct : (id) => {
      dispatch(actFetchDelProductRequest(id));
    }
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
