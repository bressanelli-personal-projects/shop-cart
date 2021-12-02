import { addCart, removeCart } from './actionsTypes';

export const addToCart = (product) => ({type: addCart, product });

export const removeFromCart = (list) => ({type: removeCart, list }); 