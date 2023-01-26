import { GET_ONE_PRODUCT, GET_PRODUCTS } from "../TypeActions/ProductsActions"


const initialstate = {
    products: [],
    oneProduct: {}
}

const ProductsReducer = (state = initialstate, action) => {
    switch (action.type) {

        case GET_PRODUCTS:
            return { ...state, products: action.payload, errors: null }
        case GET_ONE_PRODUCT:
            return { ...state, oneProduct: action.payload, errors: null }
        default: return state

    }
}

export default ProductsReducer