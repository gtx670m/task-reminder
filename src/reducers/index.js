import { combineReducers } from 'redux';
import tasks from '../reducers/tasks_reducer';
import editing_data from '../reducers/editing_reducer';

const myReducer = combineReducers({
    tasks,
    editing_data
});

export default myReducer;