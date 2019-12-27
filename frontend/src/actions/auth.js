import axios from 'axios';

import {USER_LOADED, USER_LOADING, AUTH_ERROR} from './types';

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