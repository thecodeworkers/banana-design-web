import { SET_TEST } from './action-types';

export const saveTest = (load: any) => {
  return {
    type: SET_TEST,
    payload: load
  }
}
