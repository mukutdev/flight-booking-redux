import { combineReducers } from "redux";
import createActionReducer from "./booking/actionReducer";

const rootReducer = combineReducers({
    bookings : createActionReducer
})

export default rootReducer;