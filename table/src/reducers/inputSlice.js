import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    name: "",
    contract: "",
    price: "",
    pays: [],
    isActive: "✓"
  }

const inputSlice = createSlice({
    name: 'input',
    initialState: {
        input: initialState},
    reducers:{
        change(state, action){
            state.input = {...state.input, ...action.payload}  
            //console.log(state.input)
        },
        clear(state){
            state.input = initialState;
        }

    }
});

export const {change, clear} = inputSlice.actions;
export default inputSlice.reducer;