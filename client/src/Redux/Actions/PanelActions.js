import axios from 'axios'
import { Get_All, Get_Panel_User } from '../TypeActions/PanelTypes'



export const PanelList = () => async (dispatch) => {
    try {
        const res = await axios.get('/order/ListOrders')

        dispatch({
            type: Get_All,
            payload: res.data.listord
        })

    } catch (error) {
        console.log(error)
    }
}

export const AddOrder = (newOrder) => async (dispatch) => {
    try {
        await axios.post('/order/AddOrder', newOrder)
        dispatch(PanelList())
    } catch (error) {
        console.log(error)
    }
}

export const getOneOrder = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`/order/oneOrder/${id}`)
        dispatch({
            type: Get_Panel_User,
            payload: res.data.order
        })
    } catch (error) {
        console.log(error)
    }
}


export const updateOrder = (upPanel, id) => async (dispatch) => {
    try {
        await axios.put(`/order/updateOrder/${id}`, upPanel)
        dispatch(PanelList(id))

    } catch (error) {
        console.log(error)
    }
}

export const deleteOrder = (id) => async (dispatch) => {
    try {
        await axios.delete(`/order/deleteOrder/${id}`)
        dispatch(PanelList())
    } catch (error) {
        console.log(error)
    }
}