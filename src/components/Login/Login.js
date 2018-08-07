import React, { Component } from 'react';
import { Button, Input } from 'react-materialize';
import './Login.scss';
import fire from '../../config/Fire';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }
  saveData = (event) => {
    var target = event.target; //trỏ đến các ô input
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  }
  login = (event) => {
    event.preventDefault(); //chặn submit như mặc định
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
    }).catch((error) => {
      console.log(error);
    });
  }
  signup = (event) => {
    event.preventDefault(); //chặn submit như mặc định
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
    }).catch((error) => {
      console.log(error);
    });
  }
  render() {
    return (

      <div className="container">
        <div className="left-box">
          <div className="content">
            <div className="logo"><img src="/medly_big.png" alt="" /></div>
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
                <Input s={6}
                  label="Email"
                  name="email"
                  type="text"
                  onChange={this.saveData}
                  value={this.state.userName} />
                <Input s={6}
                  label="Password"
                  name="password"
                  type="password"
                  onChange={this.saveData}
                  value={this.state.passWord}
                />
              </div>
              <div className="button">
                <div className="btn_container">
                  <Button waves='light' node='a' onClick={this.login}>SUBMIT</Button>
                  <Button waves='light' node='a' onClick={this.signup}>SIGN UP</Button>
                </div>
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
