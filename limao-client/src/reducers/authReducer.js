import { FETCH_USER } from '../Actions/types';

export default (state = null, action) => {
    switch (action.type) {
    case FETCH_USER:
        return action.payload || false;
    default:
        return state;
    }
};