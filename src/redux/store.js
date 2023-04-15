import { createStore,applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import {logger} from 'redux-logger';

import rootReducer from "./rootReducers";
import rootSaga from "./api/productSagas";

const sagaMiddleWare = createSagaMiddleware();

const middleWare = [sagaMiddleWare];

if(process.env.NODE_ENV === 'development'){
    middleWare.push(logger);
}

const store = createStore(rootReducer,applyMiddleware(...middleWare));

sagaMiddleWare.run(rootSaga);

export default store;