import { combineReducers } from "redux";
import themeReducer from './theme/reducer';
import menuReducer from './menu/reducer';

const reducers = combineReducers({
	theme: themeReducer,
	menu: menuReducer
})

export default reducers;
