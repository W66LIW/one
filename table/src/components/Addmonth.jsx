import React, { useState } from 'react';
import '../../src/App.css';
import { useDispatch, useSelector } from 'react-redux';
import {addMonth} from '../reducers/monthSlice';
import { addPays } from '../reducers/personSlice';


const Addmonth = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const months = useSelector(state => state.month.months);
  //console.log('months:' + JSON.stringify(months) )

  function onMonthClick () {
    if(!input) return;
    dispatch(addMonth(input));
    dispatch(addPays(input))
    setInput("");
  }

  //const handleAddMonthClick = (e) => {
    // e.preventDefault();
  //   if (isMonthInputFilled()) {
  //     setPayMonths((prevState) => [month, ...prevState]);
  //     setMonth("");

  //     setPersons(
  //       Object.assign([], persons).map(person => {
  //         if (person.isActive === "✓") {
  //           person.pays = [person.price, ...person.pays]
  //         }
  //         else {
  //           person.pays = ["", ...person.pays]
  //         }
  //         return (person);
  //       })
  //     )
  //   }
  // };

    return (
        <div className="Add-month">
          <form> 
            <input className='input' type="text" placeholder=" ..." 
            onChange={(e) => setInput(e.target.value)}
             value={input} 
             />
          </form>
          <button className='btn' onClick={onMonthClick}>add month</button>
</div>
    )
}

export default Addmonth;

