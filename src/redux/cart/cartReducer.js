import { ADD_ITEM, INCREMENT_ITEM, DECREMENT_ITEM } from './cartTypes';
const initialState = {
	cart: [],
	grandTotal: 0,
};

const addItemToCart = (state, payload) => {
	const newState = {...state};
	return {cart: [...newState.cart, payload], grandTotal: state.grandTotal + payload.price};
};

const incrementItemAndPrice = (state, payload) => {
	const newState = {...state};
	let total = 0;
	newState.cart.map((item) => {
		if (item.id === payload.id) {
			item.count += 1;
			item.totalPrice = item.price * item.count;
		}
		total += item.totalPrice
		return item;
	});
	return {cart: [...newState.cart], grandTotal: total}
};

const decrementItemAndPrice = (state, payload) => {
	const newState = {...state};
	let total = 0;
	newState.cart.map((item) => {
		if (item.id === payload.id) {
			item.count -= 1;
			item.totalPrice = item.price * item.count;
			total -= item.totalPrice
		}
		return item;
	});
	const filteredState = newState.cart.filter((item) =>{
		return item.count !== 0;
	});
	return {cart: [...filteredState], grandTotal: total * -1 }
};

const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_ITEM:
			return addItemToCart(state, action.payload);
		case INCREMENT_ITEM:
			return incrementItemAndPrice(state, action.payload)
		case DECREMENT_ITEM:
			return decrementItemAndPrice(state, action.payload)
		default:
			return state;
	}
};

export default cartReducer;
