const selectedQuesReducer = (state = [], action) => {
    switch (action.type) {
        case 'SELECTED_QUESTIONS_SUCCESS':
            return action.payload;
        default:
            return state;
    }
}

export default selectedQuesReducer;