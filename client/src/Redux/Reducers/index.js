import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import CategoryReducer from './CategoryReducer'
import ProductsReducer from './ProductsReducer'
import PanelReducer from './PanelReducer'

const rootReducer = combineReducers({ AuthReducer, CategoryReducer, ProductsReducer, PanelReducer })

export default rootReducer