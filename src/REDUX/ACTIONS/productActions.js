import { ActionTypes } from "../CONTANTS/actionTypes";

export const SET_PRODUCTS = (products) => {
	return {
		type: ActionTypes.SET_PRODUCTS,
		payload: products,
	};
};

export const SELECTED_PRODUCT = (product) => {
	return {
		type: ActionTypes.SELECTED_PRODUCT,
		payload: product,
	};
};

export const REMOVE_SELECTED_PRODUCT = () => {
	return {
		type: ActionTypes.REMOVE_SELECTED_PRODUCT,
	};
};
