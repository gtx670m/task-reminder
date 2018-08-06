import * as types from '../constants/ActionTypes';

var initialState = {
    id:'',
    name:'',
    date:'0000-00-00T00:00',
    status:true
};
var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.EDIT_ITEM:
            return action.task;
        default: return state;
    }
};

export default myReducer;
