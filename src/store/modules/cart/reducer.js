import { addCart, removeCart } from "./actionsTypes";

const initialState = JSON.parse(localStorage.getItem("cart")) || [];

const cartReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case addCart:
            const { product } = action;

            if (
                state.find((item) => {
                    return item.id === product.id;
                })
            ) {
                return state;
            } else {
                return [...state, product];
            }

        case removeCart:
            const { list } = action;
            return list;

        default:
            return state;
    }
};

export default cartReducer;
