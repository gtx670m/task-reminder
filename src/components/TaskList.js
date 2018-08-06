import React, { Component } from 'react';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';

class TaskList extends Component {
  editItem = (id) => {
    this.props.editItem(id);
  }
  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    });
  }
  render() {
    var { tasks } = this.props;
    var elmTask = tasks.map((task, index) => {
      return (
        <TaskItem key={task.id} task={task} index={index}/>
      )
    });
    return (
      <div>
        <table className="table table-bordered table-hover mt-15">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Due Date</th>
              <th>Time Left</th>
              <th>Alarm</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {elmTask}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks,
  } 
};

export default connect(mapStateToProps, null)(TaskList);
