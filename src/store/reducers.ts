import { combineReducers } from "redux";
import themeReducer from './theme/reducer';

const reducers = combineReducers({
  theme: themeReducer
})

export default reducers;