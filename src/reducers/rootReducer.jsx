import { combineReducers } from "redux";
import activitiesReducer from "./activitiesReducer";

const rootReducer = combineReducers({
    activity:activitiesReducer
})

export default rootReducer;