import { combineReducers } from "redux";
import toggleReducer from './toggle/reducer';
import breadcrumbReducer from './breadcrumb/reducer';
import loaderReducer from './loader/reducer';
import menuReducer from './menu/reducer';
import themeReducer from './theme/reducer';

const reducers = combineReducers({
	toggle: toggleReducer,
	breadcrumb: breadcrumbReducer,
	loader: loaderReducer,
	menu: menuReducer,
	theme: themeReducer
})

export default reducers;
