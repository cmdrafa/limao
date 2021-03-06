import axios from 'axios';
import { FETCH_USER, FETCH_POSTS } from './types';

export const fetchUser = () => async (dispatch) => {
    const res = await axios.get('/api/current_user');

    dispatch({ type: FETCH_USER, payload: res.data });
};

export const signinUser = ({ email, password }, history) => async (dispatch) => {
    const res = await axios.post('/api/signin', { email, password });

    history.push('/');
    dispatch({ type: FETCH_USER, payload: res.data });
};

export const signupUser = ({ firstName, lastName, email, password }, history) => async (dispatch) => {
    const res = await axios.post('/api/signup', { firstName, lastName, email, password });

    history.push('/login');
    dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchPosts = () => async dispatch => {
    const res = await axios.get('/api/posts');

    dispatch({ type: FETCH_POSTS, payload: res.data });
};

export const fetchPostByUrl = () => async dispatch => {
    const res = await axios.get('/api/postbyurl');

    dispatch({ type: FETCH_POSTS, payload: res.data });
};

export const fetchByCat = () => async dispatch => {
    const res = await axios.get('/api/postbycat');

    dispatch({ type: FETCH_POSTS, payload: res.data });
};

export const fetchUserPost = () => async dispatch => {
    const res = await axios.get('/api/author_post');

    dispatch({ type: FETCH_POSTS, payload: res.data });
};

export const addPost = (values, history) => async dispatch => {
    // Passing the file into the FormData object for upload
    let data = new FormData();
    data.append('file', values.imageurl);

    const temp_res = await axios.post('/api/mediaupload', data);
    values.imageurl = temp_res.data; // Setting the values.imageurl to the url received from the server

    // Do the blog post
    const res = await axios.post('/api/posts', values);

    history.push('/dashboard');
    dispatch({ type: FETCH_USER, payload: res.data });
};