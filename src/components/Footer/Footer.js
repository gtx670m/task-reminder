import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="right_text">
          @ 2017 Lindawood Health, Inc
        </div>
        <div className="left_text">
          Contact Support
        </div>
      </div>
    );
  }
}

export default Footer;