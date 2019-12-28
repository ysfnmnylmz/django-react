import {GET_TODO_MESSAGES, CREATE_TODO_MESSAGE } from "../actions/types";

const initialState = {};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_TODO_MESSAGES:
            return action.payload;
        case CREATE_TODO_MESSAGE:
            return (state = action.payload);
        default:
            return state;
    }
}