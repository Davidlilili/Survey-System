import { FETCH_USER } from '../actions/types';

export default function(state = null, action) {  // state的初始状态为null
	console.log('authReducer', action);
	switch (action.type) {
		case FETCH_USER:
			return action.payload || false;
		default:
			return state;
	}
} 
