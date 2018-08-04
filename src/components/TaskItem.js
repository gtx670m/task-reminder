import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class TaskItem extends Component {
  toggleStatus = () => {
    this.props.toggle_task_status(this.props.task.id);
  }
  deleteItem = () => {
    this.props.delete_item_dispatch(this.props.task.id);
  }
  editItem = () => {
    this.props.edit_item_dispatch(this.props.task);
  }
  render() {
    var { task, index } = this.props;
    var setTime = Date.parse(task.date);
    var thisTime = new Date();
    var temp = Math.round((setTime - thisTime) / (1000 * 60 * 60 * 24));
    if (temp < 0) {
      temp = 'Overdue!';
    } else if (!temp) {
      temp = 'Not set!';
    } else {
      temp += ' days left';
    }
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{!task.name ? '......' : task.name}</td>
        <td>{!task.date ? '......' :task.date}</td>
        <td>{temp}</td>
        <td className="text-center">
          <span
            className={this.props.task.status === true ? "label label-success" : "label label-danger"}
            onClick={this.toggleStatus}
          >{(this.props.task.status === true) ? 'ON' : 'OFF'}
          </span>
        </td>
        <td>
          <button
            type="button"
            className="btn btn-warning mr-5"
            onClick={this.editItem}
          ><i className="glyphicon glyphicon-pencil"></i>
          </button>&nbsp;
          <button
            type="button" className="btn btn-danger"
            onClick={this.deleteItem}
          ><i className="glyphicon glyphicon-trash"></i>
          </button>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = state => {
  return {
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    toggle_task_status: (id) => {
      dispatch(actions.toggle_task_status_action(id));
    },
    delete_item_dispatch: (id) => {
      dispatch(actions.delete_item_action(id));
    },
    edit_item_dispatch: (task) => {
      dispatch(actions.edit_item_action(task));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);