import React from "react";
import '../style/css/index.css';
import { useDispatch, useSelector } from "react-redux";
import { change } from "../reducers/inputSlice";



function Input({element, placeholder}){ // нельзя использовать key & ref
    const dispatch = useDispatch();
    const personInput = useSelector(state => state.personInput.input);
    return(
        <td>
            <form>
                <input className='input' type="text" placeholder={placeholder} 
                onChange={(e) => dispatch(change({[element]: e.target.value}))}
                value={personInput[element]} 
                />
            </form>
                  
        </td>
    )
}

export default Input;