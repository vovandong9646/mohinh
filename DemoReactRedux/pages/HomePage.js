import React, { Component } from 'react';
import Menu from './../components/Menu.js';

class HomePage extends Component {
  render() {
    return (
      <div>
      	<Menu />
      	<div>
      		<h1 className="alert alert-success">HomePage</h1>
      	</div>
      </div>
    );
  }
}

export default HomePage;
