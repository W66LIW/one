import { createSlice } from "@reduxjs/toolkit";

const amountsSlice = createSlice({
    name: 'amounts',
    initialState: [],
    reducers: {
        changeAmounts(state, action){
            console.log('months: ' + JSON.stringify(action.payload.months))
            const months = action.payload.months;
            const arr = [];
            months.forEach(mon => {
                    let sum = 0;
                    action.payload.persons.forEach(pers => {
                        for(let i = 0; i < months.length; i++){
                            if(pers.pays[i].payMonth === mon.name) {
                                 //console.log(pers.pays[i].amount )
                                 sum = +sum + +pers.pays[i].amount; 
                                 break;
                            } 
                        }       
                    })
                    arr.push(sum)
                    
                });
                console.log('arr: ' + arr)
                return arr;            
        }
    }
})

export const {changeAmounts} = amountsSlice.actions;
export default amountsSlice.reducer;