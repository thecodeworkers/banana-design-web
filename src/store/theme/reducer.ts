import { CHANGE_THEME } from "./action-types";

const initialState = {
  test: null
}

export default (state = initialState, { type, payload }) => {
  switch(type) {
    case CHANGE_THEME:
    return { test: payload }

    default:
    return state;
  }
}
