import React from "react";
import { useDispatch } from "react-redux";
import { editPay } from "../reducers/personSlice";


function TablePerson({person}) {
    const dispatch = useDispatch()
    function toggleEdit(payID) {   
        console.log('onDoubleClick')    
        dispatch(editPay({id: person.id, payId: payID}))
    }
    return(
        <tr>
            <td>{person.isActive}</td>
            <td>{person.name}</td>
            <td>{person.contract}</td>
            <td>{person.price}</td>
        {person.pays
        .map(pay => {
            if(!pay.isEdit){
                return(
                    <td key={pay.payID} onDoubleClick={() => toggleEdit(pay.payID)}>{pay.amount}</td>
                )} else {
                    return(
                         <td key={pay.payID} onBlur={() => toggleEdit(pay.payID)}><form><input value={pay.amount}/></form></td>
                    )
                }
            
        })}
        </tr>
    )

}

export default TablePerson;