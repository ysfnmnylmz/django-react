import {combineReducers} from "redux";
import auth from "./auth";
import todos from "./todos";
import errors from "./errors";
import todo_messages from "./todo_messages";

export default combineReducers({
    todos,
    auth,
    errors,
    todo_messages
});