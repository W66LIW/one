import React, { useState } from 'react';
import '../../src/App.css';


const Addmonth = () => {
  const [month, setMonth] = useState("");
  const [persons, setPersons] = useState([]);
  const [payMonths, setPayMonths] = useState([]);
  const isMonthInputFilled = () => month;

  const handleAddMonthClick = (e) => {
    // e.preventDefault();
    if (isMonthInputFilled()) {
      setPayMonths((prevState) => [month, ...prevState]);
      setMonth("");

      setPersons(
        Object.assign([], persons).map(person => {
          if (person.isActive === "✓") {
            person.pays = [person.price, ...person.pays]
          }
          else {
            person.pays = ["", ...person.pays]
          }
          return (person);
        })
      )
    }
  };

    return (
        <div className="Add-month">
          <form> 
            <input className='input' type="text" placeholder=" ..." onChange={(e) => setMonth(e.target.value)}
              value={month} />
          </form>
          <button className='btn' onClick={handleAddMonthClick}>add month</button>
</div>
    )
}

export default Addmonth;

