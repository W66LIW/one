import React, { useState } from 'react';
import './App.css';

const personInput = {
  name: "",
  contract: "",
  price: "",
}

const edit = {
  isEdit: false,
  personIndex: null,
}

function App() {
  const [personData, setPersonData] = useState(personInput);
  const [persons, setPersons] = useState([]);
  const [editablePersonData, setEditablePersonData] = useState(edit);

  const isInputFilled = () => personData.name && personData.contract && personData.price;

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
    console.log("handleSabmit works")
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

    console.log(data, `index ${index}`);
  }

  const handleAddMonthClick = (e) => {
   // e.preventDefault();
    let added = "added";
    let addedd = "addedd";
    setPersons(persons.map((person) => {
      person.added = added;
      person.addedd = addedd;
      return(person);
    }))


  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log(`key down "${e.key}"`);
      handleSubmitPerson(e);
    }
  }

  console.log(editablePersonData);
  console.log("persons", persons);

  return (
    <div className="App-header" tabIndex={0} onKeyDown={handleKeyDown}>

      <div className="Add-month"><button onClick={handleAddMonthClick}>add month</button></div>

      <div className="Table">
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

            {
              persons.map((person, index) => {
                return (
                  <tr id="person" key={persons.indexOf(person)} onDoubleClick={(e) => handleClickPerson(e, person, index)}><td>{person.name}</td><td>{person.contract}</td><td>{person.price}</td>
                    {/* <td>{(person.price*13/87).toFixed(0)}</td> */}
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}


export default App;
