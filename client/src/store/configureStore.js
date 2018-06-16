import thunkMiddleware from "redux-thunk";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {routerMiddleware, routerReducer} from "react-router-redux";
import createHistory from "history/createBrowserHistory";

import usersReducer from '../store/reducers/users';
import albumsReducer from '../store/reducers/albums';
import {loadState, saveState} from "./localStorage";

const rootReducer = combineReducers({
    albums: albumsReducer,
    users: usersReducer,
    routing: routerReducer
});

export const history = createHistory();

const middleware = [
    thunkMiddleware,
    routerMiddleware(history)
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(applyMiddleware(...middleware));
const persistedState = loadState();


const store = createStore(rootReducer, persistedState, enhancers);

store.subscribe(() => {
    saveState({
        users: {
            user: store.getState().users.user
        }
    });
});

export default store;