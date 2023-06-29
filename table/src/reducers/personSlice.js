import { createSlice } from "@reduxjs/toolkit";

const personSlice = createSlice({
    name: "persons",
    initialState:{
        persons: []
    },
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

            state.persons.push({...action.payload.personData, pays: pays})
        },
        addPays(state, action){
            state.persons.map(person => {
                person.pays.push({
                    payID: Date.now(),
                    payMonth: action.payload,
                    isEdit: false,
                    amount: person.price
                })
            })
        },
        changeActive(state, action){
            state.persons.map(person => {
                if(person.id === action.payload.id){
                    if(person.isActive === '✓'){
                        person.isActive = '✕';
                    } else{
                        person.isActive = '✓';
                    } 
                }
            })

        },
        editPay(state, action){
            state.persons.map(person => {
                if(person.id == action.payload.id){
                    //console.log(person.id)
                    person.pays.map(pay => {
                        if(pay.payID == action.payload.payId){
                            //console.log(pay.amount)
                            pay.isEdit = !pay.isEdit.isEdit;
                        }
                    })
                }
            })

        }
    }
});

export const {addPerson, addPays, editPay, changeActive} = personSlice.actions;
export default personSlice.reducer;