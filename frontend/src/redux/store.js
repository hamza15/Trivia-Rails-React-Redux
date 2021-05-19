import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import categoryReducer from "./reducers/categoryReducer";
import userReducer from "./reducers/userReducer";
import selectedCatReducer from "./reducers/selectedCatReducer";
import questionsReducer from "./reducers/questionsReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    categories: categoryReducer,
    user: userReducer,
    selected_category: selectedCatReducer,
    questions: questionsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;