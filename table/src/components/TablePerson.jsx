import React, { useState } from "react";
import '../style/css/index.css';
import { useDispatch } from "react-redux";
import { isPayEdit, changeActive, editPay} from "../reducers/personSlice";
import {toggle} from "../reducers/modalSlice";


function TablePerson({person}) {
    const dispatch = useDispatch();
    
    const [payInputValue, setPayInputValue] = useState("");   

    function toggleEdit(payID) {      
        dispatch(isPayEdit({id: person.id, payId: payID}));
    }

    function changeAct(){
            dispatch(changeActive({id: person.id}));
    }

    function handleOnContextMenu(e){
        e.preventDefault();     
        dispatch(toggle({id: person.id, active: true}));
    }

    function changeInputState(value){
        // dispatch(change(value));
        
    }

   

    function saveChanges(payId) {
        if(payId) toggleEdit(payId);
        dispatch(editPay({id: person.id, amount: payInputValue, payId: payId}));
        setPayInputValue('');
        //dispatch(cleanInputState());
    }

    return(
        <tr>
            <td onClick={() => dispatch(toggle({id: person.id}))}> <img src="del.png" alt="deletion icon" /></td>
            <td onDoubleClick={() => changeAct()}>{person.isActive}</td>
            <td onContextMenu={handleOnContextMenu}>{person.name}</td>
            <td>{person.contract}</td>
            <td>{person.price}</td>
        {/* {[...person.pays]
        .reverse()
        .map(pay => {
            if(!pay.isEdit){   
                // console.log(pay.amount)        
                return(
                    <td className="Pay" key={pay.payID} onDoubleClick={() => toggleEdit(pay.payID)}>{pay.amount}</td>
                 )} 
                 else {                 
                    return(
                         <td className="Pay" key={pay.payID} 
                         onBlur={() => saveChanges(pay.payID)}>
                            <form><input 
                                        type="text" 
                                        value={payInputValue}
                                        onChange={(e) => setPayInputValue(e.target.value)}
                            /></form>
                            </td>
                    )
                }
            
        })} */}
        </tr>
    )

}

export default TablePerson;