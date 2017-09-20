import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async (dispatch) => {
    const res = await axios.get('/api/current_user');

    dispatch({ type: FETCH_USER, payload: res.data });
};

export const signinUser = ({ email, password }, history) => async (dispatch) => {
    const res = await axios.post('/api/signin', { email, password });

    history.push('/');
    dispatch({ type: FETCH_USER, payload: res.data });
};

export const signupUser = ({firstName, lastName, email, password}, history) => async (dispatch) =>{
    const res = await axios.post('/api/signup', { firstName, lastName, email, password});

    history.push('/');
    dispatch({ type: FETCH_USER, payload: res.data});
};