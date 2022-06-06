import { ADD_ITEM, REMOVE_ITEM, INCREMENT_ITEM, DECREMENT_ITEM } from './cartTypes';

export const addItem = (data) => {
	return {
		type: ADD_ITEM,
		payload: data
	};
};

export const incrementItem = (data) => {
	return {
		type: INCREMENT_ITEM,
		payload: data
	};
};

export const decrementItem = (data) => {
	return {
		type: DECREMENT_ITEM,
		payload: data
	};
};

export const removeItem = () => {
	return {
		type: REMOVE_ITEM,
	};
};