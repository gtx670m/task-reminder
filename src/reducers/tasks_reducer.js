import * as types from '../constants/ActionTypes';
import fire from '../config/Fire';
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
            } else {
                index = state.findIndex((state) => {
                    return id === state.id;
                });
                state[index] = newItem;
            }
            for (let i = 0; i < state.length; i++) {
                fire.database().ref('tasks/' + i).set({
                    id: state[i].id,
                    name: state[i].name,
                    date: state[i].date ? state[i].date : '',
                    status: state[i].status
                });
            }
            // fire.database().ref('tasks').on()
            localStorage.setItem('tasks', JSON.stringify(state));
            // fire.database().ref('tasks').set({
            //     tasks: [{id: "kWayBzEt", name: "11145", status: true},
            //     {id: "vV7x1dST", name: "12", status: false}]
            // });
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
