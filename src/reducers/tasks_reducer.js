import * as types from '../constants/ActionTypes';
var randomString = require('random-string');
var localData = JSON.parse(localStorage.getItem('tasks'));
var initialState = localData ? localData : [];

var myReducer = (state = initialState, action) => {
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
                alert('Added new Item!');
            } else {
                index = state.findIndex((state) => {
                    return id === state.id;
                });
                state[index] = newItem;
                alert('Saved!');
            }
            localStorage.setItem('tasks', JSON.stringify(state));
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
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        /////////////////////////////////////////////////////////
        case types.DELETE_ITEM:
            index = state.findIndex((state) => {
                return action.id === state.id;
            });
            if (index !== -1) {
                state.splice(index, 1);
            }
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state]
        /////////////////////////////////////////////
        case types.DETELE_ALL:
            state.splice(0, state.length);
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state]
        default: return state;
    }
};

export default myReducer;
