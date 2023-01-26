import { GET_CATEGORY } from "../TypeActions/categoryTypes"

const initialstate = {
    Category: [],
}

const CategoryReducer = (state = initialstate, action) => {
    switch (action.type) {

        case GET_CATEGORY:
            return { ...state, Category: action.payload, errors: null }
        default: return state

    }
}

export default CategoryReducer