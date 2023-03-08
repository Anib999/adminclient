import { combineReducers } from "@reduxjs/toolkit";
import globalReducer from "./index";

const rootReducer = combineReducers({
    global: globalReducer,
})

export default rootReducer