import axios from 'axios';

import {GET_TODOS, DELETE_TODOS, ADD_TODOS, COMP_TODO} from "./types";

//GET_TODOS
export const getTodos = () => dispatch => {
    axios.get('http://localhost:8000/api/todos/')
        .then(res => {
            dispatch({
                type: GET_TODOS,
                payload: res.data
            });
        }).catch(err => console.log(err));
}

//DELETE_TODOS

export const deleteTodos = (id) => dispatch => {
    axios.delete('http://localhost:8000/api/todos/' + id)
        .then(res => {
            dispatch({
                type: DELETE_TODOS,
                payload: id
            });
        }).catch(err => console.log(err));
}

//ADD_TODOS
export const addTodos = (todo) => dispatch => {
    axios.post('http://localhost:8000/api/todos/', todo)
        .then(res => {
            dispatch({
                type: ADD_TODOS,
                payload: res.data
            });
        }).catch(err => console.log(err));
}

//COMP_TODO
export const compTodo = (todo) => dispatch => {
    axios.put(`http://localhost:8000/api/todos/`+ todo.id +"/", todo )
        .then(res => {
            dispatch({
                type: COMP_TODO,
                payload: todo.id
            });
        }).catch(err => console.log(err));
}