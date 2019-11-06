export const addToCart = (obj) => ({
    type: "ADD_TO_CART",
    payload: obj
});

export const removeFromCart = (id) => ({
    type: 'REMOVE_BOOK',
    payload: id
});