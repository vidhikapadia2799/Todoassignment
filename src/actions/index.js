import {ADD_TODO,DELETE_TODO,UPDATE_TODO} from "./types"

export const addTodo = (message) => ({
    type: ADD_TODO,
    message,
});

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    id,
});

export const updateTodo = ({message,id}) => ({
    type: UPDATE_TODO,
    message,
    id,
});

// export const completeTodo = (index) => ({
//     type: COMPLETE_TODO,
//     index,
// });

// export const setVisibilityFilter = (filter) => ({
//     type: SET_VISIBILITY_FILTER,
//     filter
// });