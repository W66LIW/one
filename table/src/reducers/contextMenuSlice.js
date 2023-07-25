import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
    active: false,
    id: ""
}
const contextMenuSlice = createSlice({
    name: 'contextMenuReducer',
    initialState: defaultState,
    reducers:{
        toggle(state, action){
            console.log(JSON.stringify(state))
            return {
                active: action.payload.active,
                id: action.payload.id
            };
        }
    } 
})

export const {toggle} = contextMenuSlice.actions;
export default contextMenuSlice.reducer;

