import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const defaultState = {
    active: false,
    personId: ''
}


const modalSlice = createSlice({
    name: 'modalReducer',
    initialState: defaultState,
    reducers:{
        toggle(state, actions){
            if(!state.active){
                return {
                    active: true,
                    personId: actions.payload.id
                }
            } else {
                return defaultState;
            }
            
        }
    }
        
})

export const {toggle} = modalSlice.actions;
export default modalSlice.reducer;

