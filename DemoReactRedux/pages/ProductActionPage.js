import React, { Component } from 'react';
import Menu from './../components/Menu.js';
import { connect } from 'react-redux';
import { actFetchAddProductRequest,actFetchEditProductRequest,actFetchUpdateProductRequest } from './../actions/index.js';

class ProductActionPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      price: '',
      status: true
    };
  }
  onHandleChange = (e) => {
    var { name, value } = e.target;
    this.setState({
      [name] : value
    });
  }

  componentDidMount() {
    var { match } = this.props;
    if(match) {
      var id = match.params.id;
      //call api
      this.props.fetchEditProductApi(id);  
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps && nextProps.productEdit) {
      this.setState({
        id: nextProps.productEdit.id,
        name: nextProps.productEdit.name,
        price: nextProps.productEdit.price,
        status: nextProps.productEdit.status
      });
    }
  }

  addProduct = (e) => {
    e.preventDefault();
    var { id, name, price, status } = this.state;
    var history = this.props;
    status = status === 'false' ? false : true;
    var product = {
      id: id,
      name: name,
      price: price,
      status: status
    }

    if(id) {
      this.props.fetchUpdateProduct(product);
    } else {
      this.props.fetchAddProduct(product);
    }

    
    history.history.goBack();
  }

  render() {
    var { id } = this.state;
    return (
      <div>
      	<Menu />
      	<div className="col-md-5 m-auto">
      		<form onSubmit={this.addProduct}>
            <legend>{id ? 'Edit' : 'Add'} Product</legend>
          
            <div className="form-group">
              <label>Name</label>
              <input type="text" 
                  onChange={this.onHandleChange}
                  value={this.state.name}
              className="form-control" name="name" placeholder="Input field"/>
            </div>
            <div className="form-group">
              <label>Price</label>
              <input type="text" 
                  onChange={this.onHandleChange}
                  value={this.state.price}
              className="form-control" name="price" placeholder="Input field"/>
            </div>
            <div className="form-group">
              <label>Status</label>
              <select name="status" id="input"  onChange={this.onHandleChange}
                  value={this.state.status} className="form-control" required="required">
                <option value={true}>Con hang</option>
                <option value={false}>Het hang</option>
              </select>
            </div>
          
            <button type="submit" className="btn btn-primary">Save</button>
          </form>
      	</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productEdit : state.EditProduct
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAddProduct : (product) => {
      dispatch(actFetchAddProductRequest(product));
    },
    fetchEditProductApi : (id) => {
      dispatch(actFetchEditProductRequest(id));
    },
    fetchUpdateProduct : (product) => {
      dispatch(actFetchUpdateProductRequest(product));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
