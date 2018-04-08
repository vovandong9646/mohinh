import React, { Component } from 'react';
import ProductListPage from './pages/ProductPage.js';
import NotFoundPage from './pages/NotFoundPage.js';
import HomePage from './pages/HomePage.js';
import ProductActionPage from './pages/ProductActionPage.js';
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';

var routes = [
	{
		path: "/",
		exact: true,
		main: () => <HomePage />
	},
	{
		path: "/products",
		exact: false,
		main: () => <ProductListPage />
	},
	{
		path: "/add",
		exact: false,
		main : ({history}) => <ProductActionPage history={history}/>
	},
	{
		path: '/product/:id/edit',
		exact: false,
		main: ({match, history}) => <ProductActionPage match={match} history={history}/>
	},
	{
		path: "",
		exact: false,
		main: () => <NotFoundPage/>
	}
];

class App extends Component {

	showContentMenu = (routes) => {
		var result = null;
		result = routes.map((route,index) => {
			return <Route 
						key={index}
						path={route.path}
						exact={route.exact}
						component={route.main}
					/>;
		});
		return <Switch>{result}</Switch>
	}

  render() {
    return (
      <Router>
      	{ this.showContentMenu(routes) }
      </Router>
    );
  }
}

export default App;
