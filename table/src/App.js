import React, { useState } from 'react';
import './App.css';


const personInput = {
  name: "",
  contract: "",
  price: "",
  pays: [],
  isActive: "✓",
}

const edit = {
  isEdit: false,
  //personIndex: null,
  person: {},
}




function App() {

  const [personData, setPersonData] = useState(personInput);
  const [persons, setPersons] = useState([]);
  const [editablePersonData, setEditablePersonData] = useState(edit);
  const [month, setMonth] = useState("");
  const [payMonths, setPayMonths] = useState([]);

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
    // e.preventDefault();
    setEditablePersonData({
      isEdit: true,
      //personIndex: index,
      person: data
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
    console.log('This is pay', pay, person.name);
    let pperson = Object.assign({}, person);
    pperson.pays[index]=<form>
         <input type="text"
        // onChange={(e) => setPersonData((prevState) => ({
        //   ...prevState,
        //   name: e.target.value
        //}))}
          value={pay} />
      </form>

    //   if (obj.isEdit) {
    //
    //   } else {
    
      const editablePersons = Object.assign([], persons);
      editablePersons.splice((Object.assign([], persons).indexOf(person)), 1, pperson);
      setPersons(editablePersons);
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmitPerson(e);
    }
  }


  console.log("persons", persons);


  return (
    <div>
      <div tabIndex={0} onKeyDown={handleKeyDown}>

        <div className="Add-month">
          <form>
            <input type="text" placeholder="..." onChange={(e) => setMonth(e.target.value)}
              value={month} />
          </form>
          <button onClick={handleAddMonthClick}>add month</button>
        </div>


        <div className="App-header">
          <table>
            <tbody>
              <tr><td>Арендодатель</td><td>Договор</td><td>Арендная плата</td></tr>
              <tr>
                <th>
                  <form>
                    <input type="text" placeholder="..." onChange={(e) => setPersonData((prevState) => ({
                      ...prevState,
                      name: e.target.value
                    }))}
                      value={personData.name} />
                  </form>
                </th>
                <th>
                  <form>
                    <input type="text" placeholder='...' onChange={(e) => setPersonData((prevState) => ({
                      ...prevState,
                      contract: e.target.value
                    }))}
                      value={personData.contract} />
                  </form>
                </th>
                <th>
                  <form>
                    <input placeholder='...' onChange={(e) => setPersonData((prevState) => ({
                      ...prevState,
                      price: +e.target.value
                    }))}
                      value={personData.price} />
                  </form>
                </th>
                <th><form onSubmit={handleSubmitPerson}><button type='submit'>save</button></form></th>
                <th><form onClick={handleRemoveClick}><button>remove</button></form></th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>


      <div className="Table">
        <table>
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
                      <th onDoubleClick={(e) => handleClickisActive(e, person)} key={"isActive"}>{person.isActive}</th>
                      <th key={1} onDoubleClick={(e) => handleClickPerson(e, person)}>{person.name}</th>
                      <th key={2} onDoubleClick={(e) => handleClickPerson(e, person)}>{person.contract}</th>
                      <th key={3} onDoubleClick={(e) => handleClickPerson(e, person)}>{person.price}</th>

                      {person.pays.map((pay, index) => {
                        return (
                          <th key={index} onDoubleClick={((e) => handleClickPay(e, pay, person, index))}>{pay}</th>
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
                    <th onDoubleClick={(e) => handleClickisActive(e, person)} key={"isActive"}>{person.isActive}</th>
                    <th key={1} onDoubleClick={(e) => handleClickPerson(e, person)}>{person.name}</th>
                    <th key={2} onDoubleClick={(e) => handleClickPerson(e, person)}>{person.contract}</th>
                    <th key={3} onDoubleClick={(e) => handleClickPerson(e, person)}>{person.price}</th>
                    {person.pays.map((pay, index) => {
                      return (<th key={index} onDoubleClick={((e) => handleClickPay(e, pay))}>{pay}</th>)
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
