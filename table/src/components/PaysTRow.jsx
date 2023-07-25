import React, { useState } from "react";
import '../style/css/index.css';
import { useDispatch } from "react-redux";
import { isPayEdit, editPay} from "../reducers/personSlice";

function PaysTRow({person}){
    const dispatch = useDispatch();
    const [payInputValue, setPayInputValue] = useState("");   

    function toggleEdit(payID) {      
        dispatch(isPayEdit({id: person.id, payId: payID}));
    }

    function saveChanges(payId) {
        if(payId) toggleEdit(payId);
        dispatch(editPay({id: person.id, amount: payInputValue, payId: payId}));
        setPayInputValue('');
    }

    function handleKeyDown(e, payID) {
        if(e.key === "Enter") {
            e.preventDefault();
            saveChanges(payID)
        }
       
      
    }

    return(
            <tr>
            {[...person.pays]
        .reverse()
        .map(pay => {
            if(!pay.isEdit){         
                return(
                    <td key={pay.payID} onDoubleClick={() => toggleEdit(pay.payID)}>{pay.amount !== null ? pay.amount.toLocaleString("en-US", {useGrouping: true}) : null}</td>
                 )} 
                 else {                 
                    return(
                         <td  key={pay.payID}>
                            <form onSubmit={() => saveChanges(pay.payID)}>
                                <input 
                                    type="text" 
                                    placeholder= {' ' + pay.amount}
                                    value={payInputValue}
                                    onChange={(e) => setPayInputValue(e.target.value)}
                                    onKeyDown={() => handleKeyDown(pay.payID)}
                                    onBlur={() => saveChanges(pay.payID)}
                                />
                            </form>
                            </td>
                    )
                }
        })}
            </tr> 
    )
}

export default PaysTRow;