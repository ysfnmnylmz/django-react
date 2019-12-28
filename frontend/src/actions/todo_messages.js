import {CREATE_TODO_MESSAGE} from "./types";

// Create todo message
export const createTodoMessage = msg => {
    return {
        type: CREATE_TODO_MESSAGE,
        payload: msg
    };
};