const initialState = {
    data: [],
};

const todos = (state = initialState,action) => {
    switch(action.type){
        case "ADD_TODO":
            return {
                ...state,
                data: [...state.data, action.message],
                completed: false
            };
        case "DELETE_TODO":
            return {
                ...state,
                data: [...state.data.filter((todo)=>todo.id !== action.id)]
            };
        case "UPDATE_TODO":
            return {
                ...state,
                data: [...state.data.filter((todo)=>todo.id !== action.id),
                {task: action.message,id:action.id}],

            };
        // case "COMPLETE_TODO":
        //     return [
        //         ...state.slice(0, action.index),
        //         Object.assign({}, state[action.index], {
        //          completed: true
        //         }),
        //         ...state.slice(action.index + 1)
        //     ];
        default:
            return state;
    }
}

export default todos;