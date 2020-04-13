import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk' ;
import rootReducer from './Reducers/rootReducer.jsx' ;

// const middleware = applyMiddleware(thunk);

// export default createStore(rootReducer, middleware)


// ****************************

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
// const middleware = 
applyMiddleware(thunk),
));

export default  store
//  createStore(rootReducer, middleware)
