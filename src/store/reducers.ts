import { combineReducers } from "redux";
import themeReducer from './theme/reducer';
import breadcrumbReducer from './breadcrumb/reducer';
import loaderReducer from './loader/reducer';

const reducers = combineReducers({
	theme: themeReducer,
	breadcrumb: breadcrumbReducer,
	loader: loaderReducer
})

export default reducers;
