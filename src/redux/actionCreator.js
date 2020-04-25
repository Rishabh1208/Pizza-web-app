import * as ActionTypes from './action';
import { storeProducts } from '../data';

export const addMenu = (menu) => ({
	type: ActionTypes.ADD_MENU,
	payload: menu,
});

export const menuLoading = () => ({
	type: ActionTypes.MENU_LOADING,
});

export const menuFailed = (err) => ({
	type: ActionTypes.MENU_FAILED,
	payload: err,
});

export const fetchMenu = () => (dispatch) => {
	let tempProduct = [];
	storeProducts.forEach((item) => {
		const singleItem = { ...item };
		tempProduct = [...tempProduct, singleItem];
	});
	dispatch(menuLoading(true));
	setTimeout(() => {
		dispatch(addMenu(tempProduct));
	}, 2000);
};

export const addProductToCart = (id) => {
	return (dispatch) => {
		dispatch({
			type: ActionTypes.ADD_PRODUCT_TO_CART,
			payload: id,
		});

		dispatch(addTotals());
	};
};

export const increment = (id) => {
	return (dispatch) => {
		dispatch({
			type: ActionTypes.INCREMENT,
			payload: id,
		});

		dispatch(addTotals());
	};
};

export const decrement = (id) => {
	return (dispatch) => {
		dispatch({
			type: ActionTypes.DECREMENT,
			payload: id,
		});

		dispatch(addTotals());
	};
};

export const clearCart = () => {
	return (dispatch) => {
		dispatch({
			type: ActionTypes.CLEAR_CART,
		});
		dispatch(fetchMenu());
		dispatch(addTotals());
	};
};

export const addTotals = () => ({
	type: ActionTypes.ADD_TOTALS,
});

export const openModal = () => ({
	type: ActionTypes.OPEN_MODAL,
});

export const closeModal = () => ({
	type: ActionTypes.CLOSE_MODAL,
});

export const removeItem = (id) => {
	return (dispatch) => {
		dispatch({
			type: ActionTypes.REMOVE_ITEM,
			payload: id,
		});

		dispatch(addTotals());
	};
};

export const postLogin = (
	firstname,
	lastname,
	telnum,
	email,
	agree,
	contactType,
	address
) => ({
	type: ActionTypes.LOGIN,
	payload: {
		firstname: firstname,
		lastname: lastname,
		telnum: telnum,
		email: email,
		agree: agree,
		contactType: contactType,
		address: address,
	},
});
