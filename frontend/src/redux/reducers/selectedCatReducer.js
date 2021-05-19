const selectedCatReducer = (state = [], action) => {
    switch (action.type) {
        case 'SELECTED_CATEGORY_SUCCESS':
            return action.payload;
        default:
            return state;
    }
}

export default selectedCatReducer;