import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import categoryReducer from "./reducers/categoryReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    categories: categoryReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;