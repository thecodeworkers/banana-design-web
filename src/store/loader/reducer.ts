import { LOADER } from './action-types';

const initialState = {
	loader: false
}

export default (state = initialState, {type, payload}) => {
	switch(type){
		case LOADER:
			return {loader: payload}

		default:
			return state
	}
}
