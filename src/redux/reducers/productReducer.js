import * as types from '../actions/actionTypes'

const initialState = {
    products: [],
    deletedProduct: [], //i am using for state management on ui (optional / no need)
    loading: false,
    error: null
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_PRODUCTS:
        case types.ADD_PRODUCT:
        case types.DELETE_PRODUCT:
            return {
                ...state,
                loading: true,
            };
        case types.LOAD_PRODUCT_SUCCESS:
        case types.ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload
            };
        case types.DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                deletedProduct: action.payload
            };
        case types.LOAD_PRODUCT_FAILED:
        case types.ADD_PRODUCT_FAILED:
        case types.DELETE_PRODUCT_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}

export default productReducer;