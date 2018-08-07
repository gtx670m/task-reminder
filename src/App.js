import React, { Component } from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import './App.scss';
import fire from './config/Fire';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }
  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
        // localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        // localStorage.removeItem('user');
      }
    });
  }
  render() {
    var ElmDisplay =  this.state.user ? <Home /> : <Login />;
    return (
      <div className="App">
        {ElmDisplay}
      </div>
      // <Router>
      //   <div>
      //     <Switch>
      //         <Route exact path='/' component={Login} />
      //         <Route exact path='/home' component={Home} />
      //     </Switch>
      //   </div>
      // </Router>
    );
  }
}
export default App;