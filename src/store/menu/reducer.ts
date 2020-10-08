import { CLOSE_MENU, OPEN_MENU } from './action-types';

const initialState = {
	opened: false
}

export default (state = initialState, { type }) => {
	switch (type) {
		case OPEN_MENU:
			return { opened: true }

		case CLOSE_MENU:
			return { opened: false }

		default:
			return state;
	}
}
