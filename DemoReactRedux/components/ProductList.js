import React, { Component } from 'react';

class ProductList extends Component {
  render() {
    return (
      <table className="table table-striped table-dark text-center table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            { this.props.children }
          </tbody>
        </table>
    );
  }
}

export default ProductList;
