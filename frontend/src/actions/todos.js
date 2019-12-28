import axios from 'axios';
import {tokenConfig} from "./auth";

import {GET_TODOS, DELETE_TODOS, ADD_TODOS, COMP_TODO, GET_ERRORS} from "./types";
import {createTodoMessage} from "./todo_messages";


//GET_TODOS
export const getTodos = () => (dispatch, getState) => {
    axios.get('http://localhost:8000/api/todos/', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_TODOS,
                payload: res.data
            });
        })
        .catch(err => {
            const errors = {
                msg: err.response.data,
                status: err.response.status
            };
            dispatch({
                type: GET_ERRORS,
                payload: errors
            });
        });
}

//DELETE_TODOS

export const deleteTodos = (id) => (dispatch, getState) => {
    axios.delete(`http://localhost:8000/api/todos/${id}/`, tokenConfig(getState))
        .then(res => {
            dispatch(createTodoMessage({todoDeleted: "Görev başarıyla silindi!"}));
            dispatch({
                type: DELETE_TODOS,
                payload: id
            });
        }).catch(err => {
        const errors = {
            msg: err.response.data,
            status: err.response.status
        };
        dispatch({
            type: GET_ERRORS,
            payload: errors
        });
    });
}

//ADD_TODOS
export const addTodos = (todo) => (dispatch, getState) => {
    axios.post('http://localhost:8000/api/todos/', todo, tokenConfig(getState))
        .then(res => {
            dispatch(createTodoMessage({todoAdded: "Görev başarıyla eklendi!"}));
            dispatch({
                type: ADD_TODOS,
                payload: res.data
            });
        }).catch(err => {
        const errors = {
            msg: err.response.data,
            status: err.response.status
        };
        dispatch({
            type: GET_ERRORS,
            payload: errors
        });
    });
}

//COMP_TODO
export const compTodo = (todo) => (dispatch, getState) => {
    axios.put(`http://localhost:8000/api/todos/${todo.id}/`, {
        title: todo.title,
        description: todo.description,
        completed: !todo.completed
    }, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: COMP_TODO,
                payload: todo
            });
        }).catch(err => {
        const errors = {
            msg: err.response.data,
            status: err.response.status
        };
        dispatch({
            type: GET_ERRORS,
            payload: errors
        });
    });
}