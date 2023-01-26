import { FAIL, GET_ONE_USER, GET_USERS, LOGED, LOGIN, LOGOUT, REGISTER } from "../TypeActions/AuthTypes"

const initialstate = {
    users: [],
    usr: {},
    user: {},
    errors: []
}

const AuthReducer = (state = initialstate, action) => {
    switch (action.type) {
        case GET_USERS:
            return { ...state, users: action.payload, errors: null }
        case GET_ONE_USER:
            return { ...state, usr: action.payload, errors: null }
        case REGISTER:
            localStorage.setItem('token', action.payload.token)
            return { ...state, user: action.payload.nwuser, errors: null }
        case FAIL: return { ...state, errors: action.payload, user: null }
        case LOGIN:
            localStorage.setItem('token', action.payload.token)
            return { ...state, user: action.payload.found, errors: null }
        case LOGED: return { ...state, user: action.payload, errors: null }
        case LOGOUT:
            localStorage.removeItem('token')
            return { ...state, user: null, errors: null }
        default: return state

    }
}

export default AuthReducer