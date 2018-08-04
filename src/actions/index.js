import * as types from '../constants/ActionTypes';

export const show_list_action = () => {
    return {
        type: types.SHOW_LIST
    }
}

export const save_item_action = (task) => {
    return {
        type: types.SAVE_ITEM,
        task: task
    }
}
export const toggle_task_status_action = (id) => {
    return {
        type: types.TOGGLE_TASK_STATUS,
        id
    }
}
export const delete_item_action = (id) => {
    return {
        type: types.DELETE_ITEM,
        id
    }
}
export const edit_item_action = (task) => {
    return {
        type: types.EDIT_ITEM,
        task
    }
}

export const delete_all_action = () => {
    return {
        type: types.DETELE_ALL
    }
}
