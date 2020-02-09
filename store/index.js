import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import userReducer from './reducers/user'

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose
const enhancer = composeEnhancers(
    applyMiddleware(thunk)
)

export default initialState => {
    return createStore(combineReducers({
        user: userReducer
    }), initialState, enhancer)
}
