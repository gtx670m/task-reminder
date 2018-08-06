
import React, { Component } from 'react';
import { Button, Input } from 'react-materialize';
import './Login.scss';

class Login extends Component {
  render() {
    return (
      
      <div className="container">
        <div className="left-box">
          <div className="content">
            <div className="logo"><img src="/medly_big.png" alt=""/></div>
            <div className="name">MEDLY</div>
            <div className="slogan">Prescriptions Made Easy</div>
          </div>
          <div className="address">© 2017 Lindenwood Health, Inc</div>
        </div>
        <div className="right-box">
          <div className="box">
            <div className="content">
              <div className="text">LOGIN</div>
              <div className="input">
                <Input s={6} label="Email" />
                <Input s={6} label="Password" />
              </div>
              <div className="button">
                <Button waves='light' node='a' href="/home">SUBMIT</Button>
                <a className="btn_forgot">FORGOT PASSWORD</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
