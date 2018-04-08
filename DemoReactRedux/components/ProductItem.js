import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductItem extends Component {

	onDelProduct = (id) => {
		this.props.onDelProduct(id);
	}

  render() {
  	var { product } = this.props;
  	var status = product.status ? 'Còn hàng' : 'Hết hàng';
    return (
      <tr>
	      <th scope="row">{product.id}</th>
	      <td>{product.name}</td>
	      <td>{product.price}$</td>
	      <td>{status}</td>
	      <td>
	        <Link to={`/product/${product.id}/edit`} className="btn btn-sm btn-outline-primary text-warning mr-2">Edit</Link>
	        <button type="button" onClick={()=>this.onDelProduct(product.id)} className="btn btn-sm btn-outline-danger text-success">Delete</button>
	      </td>
	    </tr>
    );
  }
}

export default ProductItem;
