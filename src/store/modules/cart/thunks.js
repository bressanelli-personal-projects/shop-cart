import { addToCart, removeFromCart } from "./actions";

export const addToCartThunk = (product) => {
    return (dispatch, getStore) => {
        const list = JSON.parse(localStorage.getItem("cart")) || [];
        const { cart } = getStore();

        if (
            cart.find((item) => {
                return item.id === product.id;
            })
        ) {
            return;
        } else {
            list.push(product);
            localStorage.setItem("cart", JSON.stringify(list));
            dispatch(addToCart(product));
        }
    };
};

export const removeFromCartThunk = (id) => {
    return (dispatch, getStore) => {
        const { cart } = getStore();

        const list = cart.filter((product) => product.id !== id);
        localStorage.setItem("cart", JSON.stringify(list));
        dispatch(removeFromCart(list));
    };
};
