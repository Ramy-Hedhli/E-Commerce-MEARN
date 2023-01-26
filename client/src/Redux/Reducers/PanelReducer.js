import { Get_All, Get_Panel_User } from "../TypeActions/PanelTypes"

const initialstate = {
    Panels: [],
    Panel: []
}

const PanelReducer = (state = initialstate, action) => {
    switch (action.type) {

        case Get_All:
            return { ...state, Panels: action.payload, errors: null }
        case Get_Panel_User:
            return { ...state, Panel: action.payload, errors: null }
        default: return state

    }
}

export default PanelReducer