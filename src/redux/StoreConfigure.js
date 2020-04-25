import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Menu } from './reducer';
import { createForms } from 'react-redux-form';
import { LoginForm } from './forms';

export const StoreConfigure = () => {
	const store = createStore(
		combineReducers({
			menu: Menu,
			...createForms({
				login: LoginForm,
			}),
		}),
		applyMiddleware(thunk, logger)
	);
	return store;
};
