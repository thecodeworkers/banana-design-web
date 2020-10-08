import { OPEN_MENU, CLOSE_MENU } from './action-types';

export const openMenu = () => {
	return {
		type: OPEN_MENU
	}
}

export const closeMenu = () => {
	return {
		type: CLOSE_MENU
	}
}
