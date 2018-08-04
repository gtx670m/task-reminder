import React, { Component } from 'react';
import NavbarComponent from '../Navbar/NavbarComponent';
import SidenavComponent from '../Sidenav/SidenavComponent';
import Footer from '../Footer/Footer';
import TaskReminder from '../TaskReminder/TaskReminder';
import './Home.scss'
class Home extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <NavbarComponent />
          <SidenavComponent />

        </div>
        <div className="body_content">
          <TaskReminder />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;