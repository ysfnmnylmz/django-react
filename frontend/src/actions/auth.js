import axios from 'axios';

import {USER_LOADED, USER_LOADING, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL} from './types';

// CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState)=>{
    // User Loading
    dispatch({type: USER_LOADING});

    // Get token fron state
    const token = getState().auth.token;

    // Headers

    const config ={
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // If token, add to headers config
    if(token){
        config.headers['Authorization'] = 'Token '+ token;
    }

    axios.get('http://localhost:8000/api/auth/user', config)
        .then(res =>{
            dispatch({
                type: USER_LOADED,
                payload: res.data
            });
        }).catch(err => console.log(err));
}

// LOGIN USER
export const login = (username, password) => dispatch =>{
    // Headers
    const config ={
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({username, password});

    axios.post('http://localhost:8000/api/auth/login', body, config)
        .then(res =>{
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
        }).catch(err => console.log(err));
}