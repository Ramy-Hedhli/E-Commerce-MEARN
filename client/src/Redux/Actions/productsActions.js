import axios from 'axios'
import { GET_ONE_PRODUCT, GET_PRODUCTS } from '../TypeActions/ProductsActions'



export const ProductsList = () => async (dispatch) => {
    try {
        const res = await axios.get('/Product/ListProducts')

        dispatch({
            type: GET_PRODUCTS,
            payload: res.data.products
        })

    } catch (error) {
        console.log(error)
    }
}

export const AddProduct = (newProduct, navigate) => async (dispatch) => {
    try {
        await axios.post('/Product/AddProduct', newProduct)
        dispatch(ProductsList())
        navigate('/ProductListAdmin')
    } catch (error) {
        console.log(error)
    }
}

export const getOneProduct = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`/Product/oneProducts/${id}`)
        dispatch({
            type: GET_ONE_PRODUCT,
            payload: res.data.oneProduct
        })
    } catch (error) {
        console.log(error)
    }
}


export const updateProduct = (upProduct, id, navigate) => async (dispatch) => {
    try {
        await axios.put(`/Product/updateProducts/${id}`, upProduct)
        dispatch(getOneProduct(id))
        navigate('/ProductListAdmin')

    } catch (error) {
        console.log(error)
    }
}

export const deleteProduct = (id) => async (dispatch) => {
    try {
        await axios.delete(`/Product/deleteProducts/${id}`)
        dispatch(ProductsList())
    } catch (error) {
        console.log(error)
    }
}