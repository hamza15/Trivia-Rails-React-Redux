const userReducer = (state = [], action) => {
    switch (action.type) {
        case 'CREATE_USER_SUCCESS':
            return action.payload;
        default:
            return state;
    }
}

export default userReducer;