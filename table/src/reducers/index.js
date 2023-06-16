//import { applyMiddleware } from "redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import reposReducer from "./reposReducer";
//import { composeWithDevTools } from 'redux-devtools-extension';
//import thunk from "redux-thunk"; // решает задачу асинхронности

const rootReducer = combineReducers({
    repos: reposReducer,
})

export const store = configureStore({
    reducer: rootReducer,
})