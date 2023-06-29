//import { applyMiddleware } from "redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
//import isMonthFilledReduser from "./isMonthFilledReduser";
//import monthReducer from "./monthReducer";
import personSlice from "./personSlice";
import inputSlice from "./inputSlice";
import monthSlice from "./monthSlice";
//import { composeWithDevTools } from 'redux-devtools-extension';
//import thunk from "redux-thunk"; // решает задачу асинхронности

const rootReducer = combineReducers({
    month: monthSlice,
    persons: personSlice,
    personInput: inputSlice
})

export const store = configureStore({
    reducer: rootReducer,
})