import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

const menus = [
    {
        name: 'Trang Chủ',
        to: '/',
        exact: true
    },
    {
        name : 'Quản Lý Sản Phẩm',
        to : '/products',
        exact : false
    },
    {
        name: 'Add Product',
        to: '/add',
        exact: false
    }
]

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
            var active = match ? 'active' : '';
            return (
                <li className={`nav-item ${active} ml-5`}>
                    <Link to={to} className="nav-link text-dark font-weight-bold">
                        {label}
                    </Link>
                </li>
            )
        }} />
    )
}

class Menu extends Component {

  showLinkMenu = (menus) => {
    var result = null;
    result = menus.map((menu,index)=>{
      return <MenuLink 
                key={index}
                label={menu.name}
                to={menu.to}
                activeOnlyWhenExact={menu.exact}
              />;
    });
    return result;
  }

  render() {
    return (
     <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
          <a className="navbar-brand" href="">React-Redux</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
             { this.showLinkMenu(menus) } 
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search"/>
              <button className="btn btn-outline-warning my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
    );
  }
}

export default Menu;
