import * as types from '../actions/actionTypes';
import { takeEvery, put, all, fork, call } from 'redux-saga/effects';

import { loadProductsSuccess, loadProductsError, addProductSuccess, addProductFailed, deleteProductSuccess, deleteProductFailed } from '../actions/action';
import {loadProductsApi,addProductsApi,deleteProductsApi} from './api'

//fetch products
export function* onLoadProductAsync() {
    try {
        const response = yield call(loadProductsApi);
        if (response.status === 200) {
            yield put(loadProductsSuccess(response.data));
        }
    } catch (error) {
        yield put(loadProductsError(error));
    }
}
export function* onLoadProducts() {
    yield takeEvery(types.LOAD_PRODUCTS, onLoadProductAsync)
}

//add products
export function* addProductAsync({payload}) {
    try {
        const response = yield call(addProductsApi,payload);
        if (response.status === 200) {
            yield put(addProductSuccess(response.data));
        }
    } catch (error) {
        yield put(addProductFailed(error));
    }
}

export function* addProduct() {
    yield takeEvery(types.ADD_PRODUCT, addProductAsync)
}

//delete product
export function* deleteProductAsync({payload}) {
    try {
        const response = yield call(deleteProductsApi,payload);
        if (response.status === 200) {
            yield put(deleteProductSuccess(response.data));
        }
    } catch (error) {
        yield put(deleteProductFailed(error));
    }
}

export function* deleteProduct() {
    yield takeEvery(types.DELETE_PRODUCT, deleteProductAsync)
}

const productSagas = [
    fork(onLoadProducts),
    fork(addProduct),
    fork(deleteProduct),
];

export default function* rootSaga() {
    yield all([...productSagas]);
}