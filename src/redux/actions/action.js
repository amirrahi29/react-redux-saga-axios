import * as types from '../actions/actionTypes'

//fetch product
export const loadProducts = () => ({
    type: types.LOAD_PRODUCTS
});

export const loadProductsSuccess = (products) => ({
    type: types.LOAD_PRODUCT_SUCCESS,
    payload: products
});

export const loadProductsError = (error) => ({
    type: types.LOAD_PRODUCT_FAILED,
    payload: error
});



//add product 
export const addProduct = (product) => ({
    type: types.ADD_PRODUCT,
    payload: product
});

export const addProductSuccess = (product) => ({
    type: types.ADD_PRODUCT_SUCCESS,
    payload: product, // Pass entire product object as payload
});

export const addProductFailed = (error) => ({
    type: types.ADD_PRODUCT_FAILED,
    payload: error
});



//delete product
export const deleteProduct = (id) => ({
    type: types.DELETE_PRODUCT,
    payload: id
});

export const deleteProductSuccess = (products) => ({
    type: types.DELETE_PRODUCT_SUCCESS,
    payload: products
});

export const deleteProductFailed = (error) => ({
    type: types.DELETE_PRODUCT_FAILED,
    payload: error
});