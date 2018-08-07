import React, { Component } from 'react';
import './TaskReminder.scss';
import TaskForm from '../TaskForm';
import TaskList from '../TaskList';
import { connect } from 'react-redux';
import fire from '../../config/Fire';

class TaskReminder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: {
        name: '',
        status: -1
      },
    }
  }
  logout = () => {
    fire.auth().signOut();
  }
  render() {
    return (
      <div className="container">
        <div className="row full_screen">
          <div className="row ">
            <h5>Task Reminder</h5>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <TaskForm />
            </div>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            
            <div className="row mt-15">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TaskList />
                <button onClick={this.logout}>Log out</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state
  };
}

export default connect(mapStateToProps)(TaskReminder);
