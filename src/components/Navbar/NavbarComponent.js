import React, { Component } from 'react';
import { Navbar, NavItem, Icon } from 'react-materialize';
import './NavbarComponent.scss';
class NavbarComponent extends Component {
  render() {
    return (
      <div>
        <Navbar brand='DASHBOARD' right>
          <NavItem><i className="fas fa-search"></i></NavItem>
          <NavItem href=''>Search</NavItem>
          <NavItem><i className="fa fa-plus"></i></NavItem>
          <NavItem href=''>New Delivery</NavItem>
          <NavItem><i className="fa fa-plus"></i></NavItem>
          <NavItem href=''>New Patient</NavItem>
        </Navbar>
      </div>
    );
  }
}

export default NavbarComponent;
