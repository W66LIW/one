import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { change } from "../reducers/inputSlice";



export default function Input({element}){ // нельзя использовать key & ref
    const dispatch = useDispatch();
    const personInput = useSelector(state => state.personInput.input);
    return(
        <td>
            <form>
                <input className='input' type="text" placeholder=" ..." onChange={(e) => dispatch(change({[element]: e.target.value}))}
                    value={personInput[element]} 
                />
            </form>
                  
        </td>
    )
}