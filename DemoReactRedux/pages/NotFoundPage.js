import React, { Component } from 'react';
import Menu from './../components/Menu.js';
class NotFoundPage extends Component {
  render() {
    return (
      <div>
      	<Menu />
       	<h1 class="alert alert-danger">Not Found Page - 404</h1>
      </div>
    );
  }
}

export default NotFoundPage;
