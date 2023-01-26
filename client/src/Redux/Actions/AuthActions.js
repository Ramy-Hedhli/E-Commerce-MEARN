import { FAIL, GET_ONE_USER, GET_USERS, LOGED, LOGIN, LOGOUT, REGISTER } from "../TypeActions/AuthTypes"
import axios from 'axios'

export const Register = (nwuser, navigate) => async (dispatch) => {
    try {
        const res = await axios.post('/user/register', nwuser)
        dispatch({
            type: REGISTER,
            payload: res.data
        })
        navigate('/Profile')
    } catch (error) {
        dispatch({
            type: FAIL,
            payload: error.response.data
        })
    }
}
export const Login = (loguser, navigate) => async (dispatch) => {
    try {
        const res = await axios.post('/user/signIn', loguser)
        dispatch({
            type: LOGIN,
            payload: res.data
        })
        navigate('/Profile')
    } catch (error) {
        dispatch({
            type: FAIL,
            payload: error.response.data
        })
    }
}

export const Loged = () => async (dispatch) => {
    const Config = {
        headers: {
            Auth: localStorage.getItem('token')
        }
    }
    try {
        const res = await axios.get('/user/Profile', Config)
        dispatch({
            type: LOGED,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: FAIL,
            payload: error.response.data
        })
    }
}

export const Logout = () => {
    return (
        {
            type: LOGOUT
        }
    )
}

export const getUsers = () => async (dispatch) => {
    try {
        const res = await axios.get('/user/Users')

        dispatch({
            type: GET_USERS,
            payload: res.data.ListU
        })

    } catch (error) {
        console.log(error)
    }
}

export const getOneUser = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`/user/Userprofile/${id}`)
        dispatch({
            type: GET_ONE_USER,
            payload: res.data.usr
        })
    } catch (error) {
        console.log(error)
    }
}


export const updateUser = (upUser, id, navigate) => async (dispatch) => {
    try {
        await axios.put(`/user/UpdateUser/${id}`, upUser)
        dispatch(getUsers())
        navigate('/Profile')

    } catch (error) {
        console.log(error)
    }
}

export const deleteUser = (id, navigate) => async (dispatch) => {
    try {
        await axios.delete(`/user/deleteUser/${id}`)
        dispatch(getUsers())
        navigate('/ListUsers')
    } catch (error) {
        console.log(error)
    }
}