import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      date: '',
      status: true
    }
  }
  componentWillReceiveProps(nextProps) {
    var { editing_data } = nextProps;
    if (nextProps) {
      this.setState({
        id: editing_data.id,
        name: editing_data.name,
        date: editing_data.date,
        status: editing_data.status
      });
    }
  }


  onChange = (event) => {
    var target = event.target; //trỏ đến các ô input
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    });
  }
  onSubmit = (event) => {
    event.preventDefault();
    this.props.save_item_dispatch(this.state);
    this.setState({
      id: '',
      name: '',
      date: '',
      status: true
    });
  }
  deleteAll = () => {
    this.props.delete_all_dispatch();
  }
  render() {
    return (
      <div>
        <form
          onSubmit={this.onSubmit}>
          <div className="form-group">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <label>Name: </label>
                <input
                  type="text" className="form-control focus_here" placeholder="Task name"
                  name="name"
                  required
                  value={this.state.name}
                  onChange={this.onChange}
                />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <label>Date: </label>
                <input
                  type="datetime-local" className="form-control"
                  name="date"
                  value={this.state.date}
                  onChange={this.onChange}
                />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <label>Alarm: </label>
                <select
                  className="form-control"
                  required="required"
                  name="status"
                  value={this.state.status}
                  onChange={this.onChange}
                >
                  <option value={true}>ON</option>
                  <option value={false}>OFF</option>
                </select>
              </div>
            </div>
            <div className="row">
              <button
                type="submit"
                className="btn btn-success mr-5 ml-15">
                <i className="glyphicon glyphicon-plus"></i>
              </button>&nbsp;
                <button
                type="button"
                className="btn btn-danger mr-5"
                onClick={this.deleteAll}
              ><i className="glyphicon glyphicon-floppy-remove"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    editing_data: state.editing_data
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    save_item_dispatch: (task) => {
      dispatch(actions.save_item_action(task));
    },
    delete_all_dispatch : () => {
      dispatch(actions.delete_all_action());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
