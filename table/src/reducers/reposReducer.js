import { createAction, createReducer } from "@reduxjs/toolkit";

//const SET_COUNT = 'SET_COUNT';

const defaultState = {
    items: [],
    isFetching: true,
    count: 0
}

export const SET_COUNT = createAction('SET_COUNT')


// export default function reposReducer(state = defaultState, action) {
//     switch(action.type) {
//         case SET_COUNT:
//             return {
//                 ...state,
//                 count: action.payload
//             }

//         default: return state;
//     }
// }

export default createReducer(defaultState, {
    [SET_COUNT]: function (state) {
        state.count = state.count + 1

    }
})

//export const setCount = (count) => ({type: SET_COUNT, payload: count})

