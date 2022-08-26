import { combineReducers } from "redux";
import dataReducer from '../slices/dataSlice'
import loadingReducer from '../slices/uiSlice'

const rootReducer = combineReducers({
    data: dataReducer,
    ui: loadingReducer
})

export default rootReducer