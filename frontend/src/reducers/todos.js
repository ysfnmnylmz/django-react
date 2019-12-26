import {GET_TODOS, DELETE_TODOS, ADD_TODOS, COMP_TODO} from "../actions/types.js";

const initialState = {
    todos: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_TODOS:
            return {
                ...state,
                todos: action.payload
            };
        case DELETE_TODOS:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            };
        case ADD_TODOS:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
        case COMP_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (action.payload.id === todo.id) {
                        console.log(action.payload);
                        return {
                            ...todo,
                            completed: !todo.completed
                        };
                    }
                    return todo;
                })
            };
        default:
            return state;
    }
}