import { TOGGLE_MENU } from './action-types';

const initialState = {
	opened: false
}

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case TOGGLE_MENU:
			return { opened: payload }

		default:
			return state;
	}
}
