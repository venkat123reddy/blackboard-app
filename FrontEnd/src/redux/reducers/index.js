import { combineReducers } from "redux";
import { adminReducer } from "./adminReducer";

const reducer = combineReducers({
    allProfiles : adminReducer
}) 

export default reducer