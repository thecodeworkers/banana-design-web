import { CHANGE_TOGGLE} from "./action-types";

const initialState = {
  toggle: 0
}

export default (state = initialState, { type, payload }) => {
  switch(type) {
    case CHANGE_TOGGLE:
    return { toggle: payload }

    default:
    return state;
  }
}
