const initialState = {
    items: [],
    isReady: false
};

const books = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        case "REMOVE_BOOK":
            return {
                ...state,
                items: state.items.filter(o => o.id != action.payload)
            };
        default:
            return state;
    }
}

export default books;