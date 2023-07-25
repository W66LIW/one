import { createSlice } from "@reduxjs/toolkit";

const personSlice = createSlice({
    name: "persons",
    initialState:[],
    reducers: {
        addPerson(state, action) {
            const pays = action.payload.months.map(month => {
                return {
                    payID: month.name + Date.now(),
                    payMonth: month.name,
                    isEdit: false,
                    amount: null
                }
            });    
            state.push({...action.payload.personData, pays: pays})
        
        },
        removePerson(state, action){ // filter() не изменяет массив, для которого он был вызван.
            return state.filter(person => person.id !== action.payload.id);
        },
        addPays(state, action){
            state.map(person => {
                if(person.isActive === '✓'){
                    person.pays.push({
                        payID: Date.now(),
                        payMonth: action.payload,
                        isEdit: false,
                        amount: person.price
                    })} else {
                        person.pays.push({
                            payID: Date.now(),
                            payMonth: action.payload,
                            isEdit: false,
                            amount: null
                        })
                        
                    }
                
            })
        },
        changeActive(state, action){
            state.map(person => {
                if(person.id === action.payload.id){
                    if(person.isActive === '✓'){
                        person.isActive = '✕';
                    } else{
                        person.isActive = '✓';
                    } 
                }
            })
        },
        isPayEdit(state, action){
            state.map(person => {
                if(person.id === action.payload.id){
                    person.pays.map(pay => {
                        if(pay.payID === action.payload.payId){
                            pay.isEdit = !pay.isEdit;
                        }
                    })
                }
            })

        },
        editPay(state, action) {
            state.map(person => {
                if(person.id === action.payload.id){
                    person.pays.map(pay => {
                        if(pay.payID === action.payload.payId){
                            if(pay.amount !== action.payload.amount)
                            console.log(pay.amount)
                            console.log(action.payload.amount)
                            pay.amount = action.payload.amount;
                            console.log(pay.amount)

                        }
                    })
                }
            })
        }
    }
});

export const {addPerson, removePerson, addPays, isPayEdit, changeActive, editPay} = personSlice.actions;
export default personSlice.reducer;