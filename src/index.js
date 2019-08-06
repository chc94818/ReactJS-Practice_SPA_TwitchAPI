import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import AppContainer from './components/App/AppContainer';
import * as serviceWorker from './serviceWorker';
import NavigatorReducer from './reducers/NavigatorReducer'
import GameReducer from './reducers/GameReducer'


const thunkMiddleware = ({ dispatch, getState }) => {
    return (next) => (action) => {
        if (typeof action === 'function') {
            return action(dispatch, getState);
        }
        return next(action);
    };
};

const composedReducer = combineReducers({NavigatorReducer, GameReducer});
const store = createStore(
    composedReducer,
    applyMiddleware(thunkMiddleware)
);

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
