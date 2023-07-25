import { configureStore, combineReducers } from "@reduxjs/toolkit";
import personSlice from "./personSlice";
import inputSlice from "./inputSlice";
import monthSlice from "./monthSlice";
import modalSlice from "./modalSlice";
import contextMenuSlice from "./contextMenuSlice";
import amountsSlice from "./amountsSlice";



const rootReducer = combineReducers({
    month: monthSlice,
    persons: personSlice,
    personInput: inputSlice,
    modal: modalSlice,
    contextMenu: contextMenuSlice,
    amounts: amountsSlice
})

export const store = configureStore({
    reducer: rootReducer,
})