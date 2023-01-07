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
  personIndex: null,
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
        const editablePersons = persons;
        editablePersons.splice((editablePersonData.personIndex), 1, personData);
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
    setPersons(persons.filter((person, index) => index !== editablePersonData.personIndex));
    setPersonData(personInput);
  }

  const handleClickPerson = (e, data, index) => {
    e.preventDefault();
    setEditablePersonData({
      isEdit: true,
      personIndex: index
    })
    setPersonData(data);

    console.log(`Edit`, data, `index ${index}`);
  }


  const handleClickisActive = (e, person, index) => {
    e.preventDefault();
    if (person.isActive === "✓") {
      person.isActive = "✕";
    } else { person.isActive = "✓" }
    const editablePersons = persons;
    editablePersons.splice((editablePersonData.personIndex), 1, person);
    setPersons(editablePersons);
    //console.log("Active", person);
  }


  const handleAddMonthClick = (e) => {
    // e.preventDefault();
    if (isMonthInputFilled()) {
      setPayMonths((prevState) => [month, ...prevState]);
      setMonth("");

      setPersons(
        persons.map(person => {
          person.pays = [person.price, ...person.pays]
          return (person);
        })
      )
    }
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
              ([...persons]
                .sort((a, b) => a.name > b.name ? 1 : -1,))
                .map((person, index) => {
                  return (
                    <tr key={index}>
                      <th onDoubleClick={(e) => handleClickisActive(e, person, index)} key={"isActive"}>{person.isActive}</th>
                      <th key={"name"} onDoubleClick={(e) => handleClickPerson(e, person, index)}>{person.name}</th>
                      <th key={"contract"} onDoubleClick={(e) => handleClickPerson(e, person, index)}>{person.contract}</th>
                      <th key={"price"} onDoubleClick={(e) => handleClickPerson(e, person, index)}>{person.price}</th>
                      {person.pays.map((pay, index) => {
                        return (<th key={index}>{pay}</th>)
                      }
                      )
                      }
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
