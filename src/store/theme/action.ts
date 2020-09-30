import { CHANGE_THEME } from './action-types';

export const saveTest = (load: any) => {
  return {
    type: CHANGE_THEME,
    payload: load
  }
}
