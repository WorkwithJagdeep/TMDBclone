import { combineReducers } from "redux";
import reducer  from "./reducer";

const reducers = combineReducers({
    allpr : reducer
})

export default reducers
