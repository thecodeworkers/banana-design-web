import { OPEN_MENU, CLOSE_MENU } from './action-types';

export const openMenu = () => {
	console.log('openmenu in action');
	return {
		type: OPEN_MENU
	}
}

export const closeMenu = () => {
	return {
		type: CLOSE_MENU
	}
}
