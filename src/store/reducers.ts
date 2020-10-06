import { combineReducers } from "redux";
import themeReducer from './theme/reducer';
import breadcrumbReducer from './breadcrumb/reducer';

const reducers = combineReducers({
	theme: themeReducer,
	breadcrumb: breadcrumbReducer
})

export default reducers;
