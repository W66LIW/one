import React from "react";
import '../style/css/index.css';
//import '../App.css';
import { useDispatch, useSelector } from "react-redux";
import { change, clear } from "../reducers/inputSlice";
import { addPerson } from "../reducers/personSlice";
import  Input  from "./Inputs";

function PersonInput () {
    const dispatch = useDispatch();
    const personInput = useSelector(state => state.personInput.input);
    const months = useSelector(state => state.month.months);

    const disabled = personInput.name && personInput.contract && personInput.price ? "" : "disabled"

    function handleSubmitPerson(e) {
        e.preventDefault();
        dispatch(addPerson({
            personData: {...personInput, id: Date.now()},
            months: months
        }))
        dispatch(clear()) 
        return false;       
    }

    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        if(personInput.name && personInput.contract && personInput.price){
          handleSubmitPerson(e);
        }
        
      }
      return false;
    }

    return(
        <div className="App-header"  onKeyDown={handleKeyDown}>
          <table className="table-header">
            <thead>
            <tr><th>Арендодатель</th><th>Договор</th><th>Арендная плата</th><th></th></tr>
            </thead>
            <tbody className="tableInputs">              
              <tr>
                <Input element={'name'} placeholder={'  фио'} tabIndex={0}/>
                <Input element={'contract'} placeholder={'  ... от ...'} tabIndex={1}/>
                <Input element={'price'} placeholder={'  сумма в руб.'} tabIndex={2}/>
                <td><div>
                        <form onSubmit={handleSubmitPerson}>
                          <button disabled = {disabled} className='btn' type='submit'>save</button>
                        </form>
                    </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    )
}

export default PersonInput;