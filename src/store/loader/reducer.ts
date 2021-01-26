import { LOADER, ANIMATION, MENU_ANIMATION } from './action-types';

const initialState = {
	loader: false,
	animation: false,
	menuAnimation: false
}

export default (state = initialState, {type, payload}) => {
	switch(type){
		case LOADER:
			return { ...state, loader: payload }

		case ANIMATION:
			return { ...state, animation: payload }

		case MENU_ANIMATION:
			return { ...state, menuAnimation: payload }

		default:
			return state
	}
}
