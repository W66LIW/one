import React, { useState } from 'react';
import '../style/css/index.css';
import { useDispatch, useSelector } from 'react-redux';
import {addMonth} from '../reducers/monthSlice';
import { addPays } from '../reducers/personSlice';
import { changeAmounts } from '../reducers/amountsSlice';


const Addmonth = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const months = useSelector(state => state.month.months);
  const persons = useSelector(state => state.persons);

  console.log(7)
  const disabled = input ? '' : 'disabled';

  let arr = [];
  for(let i = -1; i < 11; i++){
    let date = new Date();
    date.setMonth(date.getMonth() + i);
    arr.push((date.toLocaleString('ru', { month: 'short', year: 'numeric'})).slice(0, -3));
  }
  


  function onMonthClick () {
    setInput("");
    dispatch(addMonth(input));
    dispatch(addPays(input));
  }
  dispatch(changeAmounts({months: months, persons: persons}))

    return (
        <div className="Add-month">
          <select onChange={(e) => setInput(e.target.value)}>
            { arr.map(mon => <option key={mon}>{mon}</option>) }
          </select>
          <button disabled = {disabled} className='btn' onClick={onMonthClick}>Add month</button>
</div>
    )
}

export default Addmonth;

