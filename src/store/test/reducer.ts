import { SET_TEST } from "./action-types";

const initialState = {
  test: null
}

export default (state = initialState, { type, payload }) => {
  switch(type) {
    case SET_TEST:
    return { test: payload }

    default:
    return state;
  }
}
