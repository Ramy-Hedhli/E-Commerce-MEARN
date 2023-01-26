import axios from 'axios'
import { GET_CATEGORY } from '../TypeActions/categoryTypes'


export const CategoryList = () => async (dispatch) => {
    try {
        const res = await axios.get('/category/categoryList')

        dispatch({
            type: GET_CATEGORY,
            payload: res.data.categories
        })

    } catch (error) {
        console.log(error)
    }
}

export const AddCategory = (newCategory, navigate) => async (dispatch) => {
    try {
        await axios.post('/category/categoryAdd', newCategory)
        dispatch(CategoryList())
        navigate('/CategoryListAdmin')
    } catch (error) {
        console.log(error)
    }
}

// export const getOneCategory = (id) => async (dispatch) => {
//     try {
//         const res = await axios.get(`/category/oneCategory/${id}`)
//         dispatch({
//             type: GET_ONE_CATEGORY,
//             payload: res.data.
//         })
//     } catch (error) {
//         console.log(error)
//     }
// }


export const updateCategory = (upCategory, id, navigate) => async (dispatch) => {
    try {
        await axios.put(`/category/categoryUpdate/${id}`, upCategory)
        dispatch(CategoryList())
        navigate('/CategoryListAdmin')

    } catch (error) {
        console.log(error)
    }
}

export const deleteCategory = (id, navigate) => async (dispatch) => {
    try {
        await axios.delete(`/category/categoryDelete/${id}`)
        dispatch(CategoryList())
    } catch (error) {
        console.log(error)
    }
}