import { LOADER, ANIMATION, MENU_ANIMATION } from './action-types';

export const setLoader = (param: boolean) => {
	return {
		type: LOADER,
		payload: param
	}
}

export const setAnimationState = (param: boolean) => {
	return {
		type: ANIMATION,
		payload: param
	}
}

export const setMenuAnimation = (param: boolean) => {
	return {
		type: MENU_ANIMATION,
		payload: param
	}
}
