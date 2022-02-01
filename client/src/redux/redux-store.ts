import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import tasksReducer from './tasks-reducer';
import otherReducer from './other-reducer';
import thunkMiddleware from 'redux-thunk';

let rootReduser = combineReducers({
    tasks: tasksReducer,
    other: otherReducer
});

type rootReduserType = typeof rootReduser;
export type AppStateType = ReturnType<rootReduserType>;

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(rootReduser, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;