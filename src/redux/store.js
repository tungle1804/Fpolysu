import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducers from './reducers'
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
const sagaMiddleware = createSagaMiddleware();
const middleware = [thunk, sagaMiddleware]
if (process.env.NODE_ENV !== "production") {
    middleware.push(createLogger())
}
const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            shouldHotReload: false,
        })
        : compose;




// export const store = createStore(
//     reducers,
//     enhancer,


// )
const configureStore = () => {

    const enhancers = [applyMiddleware(...middleware)];
    const store = createStore(reducers, composeEnhancers(...enhancers));
    sagaMiddleware.run(rootSaga)
    return store;
};
export const store = configureStore();