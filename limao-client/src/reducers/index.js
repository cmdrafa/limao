import { combineReducers } from 'redux';
import authReducer from './authReducer';
import postsReducer from './postsReducer';
import { reducer as reduxForm } from 'redux-form';

export default combineReducers({
    auth: authReducer,
    form: reduxForm,
    posts: postsReducer
});