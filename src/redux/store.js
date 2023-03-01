import { createStore } from "redux";
import createActionReducer from "./booking/actionReducer";

const store = createStore(createActionReducer)

export default store