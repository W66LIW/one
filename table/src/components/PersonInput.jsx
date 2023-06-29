import React from "react";
import '../App.css';
import { useDispatch, useSelector } from "react-redux";
import { change, clear } from "../reducers/inputSlice";
import { addPerson } from "../reducers/personSlice";
import  Input  from "./inputs";

export default function PersonInput () {
    const dispatch = useDispatch();
    const personInput = useSelector(state => state.personInput.input);
    const months = useSelector(state => state.month.months);
    //console.log(months)

    function handleSubmitPerson(e) {
        e.preventDefault();
        dispatch(addPerson({
            personData: {...personInput, id: Date.now()},
            months: months
        }))
        dispatch(clear())        
    }

    return(
        <div className="App-header">
          <table className="table-header">
            <thead>
            <tr><th>Арендодатель</th><th>Договор</th><th>Арендная плата</th><th></th></tr>
            </thead>
            <tbody className="tableInputs">              
              <tr>
                <Input element={'name'}/>
                <Input element={'contract'}/>
                <Input element={'price'}/>
                {/* <td><div>
                  <form>
                    <input className='input' type="text" placeholder=" ..." onChange={(e) => dispatch(change({name: e.target.value}))}
                      value={personInput.name} 
                     />
                  </form>
                  </div>
                </td>
                 <td><div>
                  <form>
                    <input className='input' type="text" placeholder=' ...' onChange={(e) => dispatch(change({contract: e.target.value}))}                  
                       value={personInput.contract} 
                    />
                  </form></div>
                </td>
                <td>
                  <div>
                  <form>
                    <input className='input' placeholder=' ...' onChange={(e) => dispatch(change({price: +e.target.value}))}
                       value={personInput.price} 
                    />
                  </form>
                  </div>
                  </td>  */}
                <td><div><form onSubmit={handleSubmitPerson}><button className='btn' type='submit'>save</button></form></div></td>
              </tr>
            </tbody>
          </table>
        </div>
    )
}