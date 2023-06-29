import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";




const defaultState = {
    months: [],
}

const monthSlice = createSlice({
    name: 'monthReducer',
    initialState: defaultState,
    reducers:{
        addMonth(state, action){
            state.months.push({
                id: Date.now(),
                name: action.payload})
            //console.log('action.payload' + action.payload)
        }
    }
})

export const {addMonth} = monthSlice.actions;
export default monthSlice.reducer;


//export const add_months = createAction('add_months')
// export default createReducer(defaultState, {
//     [add_months]: function (state) {

//         state.months = [11, ...state.months];
//     }
// })