import { LOADER } from './action-types';

export const setLoader = (param: boolean) => {
	return {
		type: LOADER,
		payload: param
	}
}
