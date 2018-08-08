import * as types from '../constants/ActionTypes';
import fire from '../config/Fire';
var database = fire.database();
var randomString = require('random-string');
database.ref('tasks').on('value', snapshot => {
  localStorage.setItem('tasks', JSON.stringify(snapshot.val()));
});

var localData = JSON.parse(localStorage.getItem('tasks'));
var initialState = localData ? localData : [];
// var initialState = firebaseData ? firebaseData : [];
// console.log(temp);
// var myReducer = (state = initialState, action) => {
export default (state = initialState, action) => {
  var index;
  switch (action.type) {
    case types.SHOW_LIST:
      return state;
    /////////////////////////////////////////////////////////
    case types.SAVE_ITEM:
      const { name, date, status, id } = action.task;
      var newItem = {
        id: id,
        name: name,
        date: date,
        status: status === "false" ? false : true
      }
      if (!newItem.id) {
        newItem.id = randomString();
        state.push(newItem);
      } else {
        index = state.findIndex((state) => {
          return id === state.id;
        });
        state[index] = newItem;
      }
      for (let i = 0; i < state.length; i++) {
        database.ref('tasks/' + i).set({
          id: state[i].id,
          name: state[i].name,
          date: state[i].date ? state[i].date : '',
          status: state[i].status
        });
      }
      // localStorage.setItem('tasks', JSON.stringify(state));
      return [...state];
    /////////////////////////////////////////////////////////
    case types.TOGGLE_TASK_STATUS:
      index = state.findIndex((state) => {
        return action.id === state.id;
      })
      if (index !== -1) {
        state[index] = {
          ...state[index],
          status: !state[index].status
        }
      }
      for (let i = 0; i < state.length; i++) {
        database.ref('tasks/' + i).set({
          id: state[i].id,
          name: state[i].name,
          date: state[i].date ? state[i].date : '',
          status: state[i].status
        });
      }
      // localStorage.setItem('tasks', JSON.stringify(state));
      return [...state];
    /////////////////////////////////////////////////////////
    case types.DELETE_ITEM:
      index = state.findIndex((state) => {
        return action.id === state.id;
      });
      if (index !== -1) {
        state.splice(index, 1);
      }
      for (let i = 0; i < state.length; i++) {
        database.ref('tasks/' + i).set({
          id: state[i].id,
          name: state[i].name,
          date: state[i].date ? state[i].date : '',
          status: state[i].status
        });
      }
      // localStorage.setItem('tasks', JSON.stringify(state));
      return [...state]
    /////////////////////////////////////////////
    case types.DETELE_ALL:
      state.splice(0, state.length);
      for (let i = 0; i < state.length; i++) {
        database.ref('tasks/' + i).set({
          id: state[i].id,
          name: state[i].name,
          date: state[i].date ? state[i].date : '',
          status: state[i].status
        });
      }
      // localStorage.setItem('tasks', JSON.stringify(state));
      return [...state]
    default: return state;
  }
};

// export default myReducer;
