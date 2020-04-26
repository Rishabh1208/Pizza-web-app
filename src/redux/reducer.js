import * as ActionTypes from './action';
import { LoginForm } from './forms';
export const Menu = (
	state = {
		isLoading: true,
		errMess: null,
		menu: [],
		cart: [],
		cartSubTotal: 0,
		cartTax: 0,
		cartTotal: 0,
		isModalOpen: false,
		loginForm: { ...LoginForm },
	},
	action
) => {
	switch (action.type) {
		case ActionTypes.ADD_MENU:
			return {
				...state,
				isLoading: false,
				errMess: null,
				menu: action.payload,
			};
		case ActionTypes.MENU_LOADING:
			return {
				...state,
				isLoading: true,
				errMess: null,
				menu: [],
			};
		case ActionTypes.MENU_FAILED:
			return {
				...state,
				isLoading: false,
				errMess: action.payload,
			};

		case ActionTypes.OPEN_MODAL:
			return {
				...state,
				isModalOpen: true,
			};

		case ActionTypes.CLOSE_MODAL:
			return {
				...state,
				isModalOpen: false,
			};

		case ActionTypes.ADD_PRODUCT_TO_CART:
			let tempProducts = [...state.menu];
			const findItem = tempProducts.find((item) => item.id === action.payload);
			const updatedItemIndex = tempProducts.indexOf(findItem);
			const product = tempProducts[updatedItemIndex];
			product.inCart = true;
			product.count = 1;
			const price = product.price;
			product.total = price;

			return {
				...state,
				menu: [...tempProducts],
				cart: [...state.cart, product],
			};

		case ActionTypes.ADD_TOTALS:
			let subTotal = 0;
			state.cart.map((item) => (subTotal += item.total));
			const tempTax = subTotal * 0.1;
			const tax = parseFloat(tempTax.toFixed(2));
			const Total = subTotal + tax;
			return {
				...state,
				cartSubTotal: subTotal,
				cartTax: tax,
				cartTotal: Total + 1,
			};

		case ActionTypes.INCREMENT:
			let tempCart = [...state.cart];
			const selectedProduct = tempCart.find(
				(item) => item.id === action.payload
			);
			const index = tempCart.indexOf(selectedProduct);
			const IncrementProduct = tempCart[index];
			IncrementProduct.count += 1;
			IncrementProduct.total = IncrementProduct.count * IncrementProduct.price;

			return {
				...state,
				cart: [...tempCart],
			};

		case ActionTypes.REMOVE_ITEM:
			let tempMenu = [...state.menu];
			let tempUpdatedCart = [...state.cart];
			tempUpdatedCart = tempUpdatedCart.filter(
				(item) => item.id !== action.payload
			);
			const findRemoveItem = tempMenu.find(
				(item) => item.id === action.payload
			);
			const updatedIndex = tempMenu.indexOf(findRemoveItem);
			const removedProduct = tempMenu[updatedIndex];
			removedProduct.inCart = false;
			removedProduct.count = 0;
			removedProduct.total = 0;

			return {
				...state,
				cart: [...tempUpdatedCart],
				menu: [...tempMenu],
			};

		case ActionTypes.DECREMENT:
			let tempDecrementCart = [...state.cart];
			const selectProduct = tempDecrementCart.find(
				(item) => item.id === action.payload
			);
			const DecrementIndex = tempDecrementCart.indexOf(selectProduct);
			const DecrementProduct = tempDecrementCart[DecrementIndex];
			DecrementProduct.count -= 1;
			if (DecrementProduct.count === 0) {
				let tempMenu = [...state.menu];
				let tempUpdatedCart = [...state.cart];
				tempUpdatedCart = tempUpdatedCart.filter(
					(item) => item.id !== action.payload
				);
				const findRemoveItem = tempMenu.find(
					(item) => item.id === action.payload
				);
				const updatedIndex = tempMenu.indexOf(findRemoveItem);
				const removedProduct = tempMenu[updatedIndex];
				removedProduct.inCart = false;
				removedProduct.count = 0;
				removedProduct.total = 0;

				return {
					...state,
					cart: [...tempUpdatedCart],
					menu: [...tempMenu],
				};
			} else {
				DecrementProduct.total =
					DecrementProduct.count * DecrementProduct.price;
				return {
					...state,
					cart: [...tempDecrementCart],
				};
			}

		case ActionTypes.CLEAR_CART:
			return {
				...state,
				cart: [],
			};

		case ActionTypes.LOGIN:
			let tempLogin = { ...state.loginForm };
			tempLogin = { ...action.payload };

			return {
				...state,
				loginForm: { ...tempLogin },
			};

		default:
			return state;
	}
};
