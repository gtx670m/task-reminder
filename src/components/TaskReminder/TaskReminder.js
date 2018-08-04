import React, { Component } from 'react';
import './TaskReminder.scss';
import TaskForm from '../TaskForm';
import TaskList from '../TaskList';
import { connect } from 'react-redux';

class TaskReminder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: {
        name: '',
        status: -1
      },
      keyword: '',
      sortBy: 'name',
      sortValue: 1
    }
  }

  filterItems = (filterName, filterStatus) => {
    filterStatus = parseInt(filterStatus, 10);
    this.setState({
      filter: {
        name: filterName.toLowerCase(),
        status: filterStatus
      }
    });
  }
  onSearch = (keyword) => {
    this.setState({
      keyword: keyword
    });
  }
  onSort = (sortBy, sortValue) => {
    this.setState({
      sortBy: sortBy,
      sortValue: sortValue
    });
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
                <TaskList
                  filterItems={this.filterItems}
                />
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
