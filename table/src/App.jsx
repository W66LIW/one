import React, { useState } from 'react';
import './App.css';
import Addmonth from './components/Addmonth';
import { useDispatch, useSelector } from 'react-redux';
//import { setCount } from './reducers/reposReducer';
import { SET_COUNT } from './reducers/reposReducer';


const personInput = {
  name: "",
  contract: "",
  price: "",
  pays: [],
  isActive: "✓",
}

const edit = {
  isEdit: false,
  person: {},
}

const payEdit = {
  isEdit: false,
  person: {},
  index: "",
  pay: "empty",
}



function App() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.repos.count)

  function onCountClick () {
    dispatch(SET_COUNT())
  }

  

  const [personData, setPersonData] = useState(personInput);
  const [persons, setPersons] = useState([]);
  const [editablePersonData, setEditablePersonData] = useState(edit);
  const [month, setMonth] = useState("");
  const [payMonths, setPayMonths] = useState([]);
  const [editablePay, setPay] = useState(payEdit)

  const isInputFilled = () => personData.name && personData.contract && personData.price;
  const isMonthInputFilled = () => month;




  const handleSubmitPerson = (e) => {
    e.preventDefault();
    if (isInputFilled()) {
      if (editablePersonData.isEdit) {
        const editablePersons = Object.assign([], persons);
        editablePersons.splice((editablePersons.indexOf(editablePersonData.person)), 1, personData);
        setPersons(editablePersons);
        setEditablePersonData(edit);
      } else {
        setPersons((prevState) => [personData, ...prevState])
      };
      setPersonData(personInput);
    }
  }

  const handleRemoveClick = (e) => {
    e.preventDefault();
    setPersons(Object.assign([], persons).filter((person, index) => index !== persons.indexOf(editablePersonData.person)));
    setPersonData(personInput);


  }

  const handleClickPerson = (e, data) => {
    setEditablePersonData({
      isEdit: true,
      person: data,
    })
    setPersonData(data);

    console.log(`Edit`, data);
  }


  const handleClickisActive = (e, personn) => {
    e.preventDefault();
    if (!isInputFilled()) {
      let person = Object.assign({}, personn);
      if (person.isActive === "✓") {
        person.isActive = "✕";
      } else { person.isActive = "✓"; }
      const editablePersons = Object.assign([], persons);
      editablePersons.splice((Object.assign([], persons).indexOf(personn)), 1, person);
      setPersons(editablePersons);
    }
  }


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
  }

  const handleClickPay = (e, pay, person, index) => {
   const p = new Promise((resolve, reject) => {
    setPay({
      isEdit: true,
      person: person,
      index: index,
      pay: pay,
    });
    resolve();
   }) 

   p.then(() => {
    let pperson = Object.assign({}, person);
    pperson.pays[index] = <form>
      <input className='Pay-input' type="text"
        onChange={(e) => setPay(e.target.value)}
        value={editablePay.pay} />
    </form>

    const editablePersons = Object.assign([], persons);
    editablePersons.splice((Object.assign([], persons).indexOf(person)), 1, pperson);
    setPersons(editablePersons);

    
   })

  }

  

  const handleSubmitPay = () => {


  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmitPerson(e);
      handleSubmitPay(e);
    }
  }


   console.log("persons", persons);
   //console.log("editablePay", editablePay);



  return (
    <div>
      <button onClick={() => onCountClick()}>COUNT</button>
      <div>{count}</div>
      <div tabIndex={0} onKeyDown={handleKeyDown}>
        <Addmonth value = {1}/>
        <div className="Add-month">
          <form> 
            <input className='input' type="text" placeholder=" ..." onChange={(e) => setMonth(e.target.value)}
              value={month} />
          </form>
          <button className='btn' onClick={handleAddMonthClick}>add month</button>
        </div>


        <div className="App-header">
          <table className="table-header">
            <thead>
            <tr><th>Арендодатель</th><th>Договор</th><th>Арендная плата</th><th></th><th></th></tr>
            </thead>
            <tbody className="tableInputs">              
              <tr>
                <td><div>
                  <form>
                    <input className='input' type="text" placeholder=" ..." onChange={(e) => setPersonData((prevState) => ({
                      ...prevState,
                      name: e.target.value
                    }))}
                      value={personData.name} />
                  </form>
                  </div>
                </td>
                <td><div>
                  <form>
                    <input className='input' type="text" placeholder=' ...' onChange={(e) => setPersonData((prevState) => ({
                      ...prevState,
                      contract: e.target.value
                    }))}
                      value={personData.contract} />
                  </form></div>
                </td>
                <td>
                  <div>
                  <form>
                    <input className='input' placeholder=' ...' onChange={(e) => setPersonData((prevState) => ({
                      ...prevState,
                      price: +e.target.value
                    }))}
                      value={personData.price} />
                  </form>
                  </div>
                  </td>
                <td><div><form onSubmit={handleSubmitPerson}><button className='btn' type='submit'>save</button></form></div></td>
                <td><div><form onClick={handleRemoveClick}><button className='btn'>remove</button></form></div></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>


      <div>
        <table className="Table">
          <thead><tr><th></th><th>ФИО</th><th>ДОГОВОР</th><th>АРЕНДНАЯ ПЛАТА</th>
            {payMonths.map((mnth) => {
              return (<th key={mnth}>{mnth}</th>)
            })}
          </tr></thead>
          <tbody>

            {
              (Object.assign([], persons)
                .filter((person) => person.isActive === "✓")
                .sort((a, b) => (a.name > b.name ? 1 : -1)))
                .map((person, index) => {
                  return (
                    <tr key={index}>
                      <td onDoubleClick={(e) => handleClickisActive(e, person)} key={"isActive"}>{person.isActive}</td>
                      <td key={1} onDoubleClick={(e) => handleClickPerson(e, person)}>{person.name}</td>
                      <td key={2} onDoubleClick={(e) => handleClickPerson(e, person)}>{person.contract}</td>
                      <td key={3} onDoubleClick={(e) => handleClickPerson(e, person)}>{person.price}</td>

                      {person.pays.map((pay, index) => {
                        return (
                          <td key={index} onDoubleClick={((e) => handleClickPay(e, pay, person, index))}>{pay}</td>
                        )
                      })}
                    </tr>)
                })
            }
            {(Object.assign([], persons)
              .filter((person) => person.isActive === "✕")
              .sort((a, b) => a.name > b.name ? 1 : -1,))
              .map((person, index) => {
                return (
                  <tr key={index}>
                    <td onDoubleClick={(e) => handleClickisActive(e, person)} key={"isActive"}>{person.isActive}</td>
                    <td key={1} onDoubleClick={(e) => handleClickPerson(e, person)}>{person.name}</td>
                    <td key={2} onDoubleClick={(e) => handleClickPerson(e, person)}>{person.contract}</td>
                    <td key={3} onDoubleClick={(e) => handleClickPerson(e, person)}>{person.price}</td>
                    {person.pays.map((pay, index) => {
                      return (<td key={index} onDoubleClick={((e) => handleClickPay(e, pay))}>{pay}</td>)
                    })}
                  </tr>)
              })
            }

          </tbody>
        </table>
      </div>

    </div>
  );
}


export default App;
