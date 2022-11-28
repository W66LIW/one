import React, {useState} from 'react';
import './App.css';

const personInput = {
  name: "",
  contract: "",
  price: "",
}

function App() {
  const [personData, setPersonData] = useState(personInput);
  const [persons, setPerson] = useState([]);
  console.log(persons)
  const handleSubmitPerson = (e) => {
    e.preventDefault();
    setPerson((prevState) => [...prevState, personData]);
    setPersonData(personInput);


  }
  return (
    <div className="App-header">
      <table>
        <tr>
          <th>
          <form>
            <input type="text" placeholder="..." onChange={(e) => setPersonData((prevState) => ({
              ...prevState,
              name: e.target.value
              }))}
              value={personData.name}/>
          </form>
        </th>
        <th>
          <form>
            <input type="text" placeholder='...' onChange={(e) => setPersonData((prevState)=>({
              ...prevState,
              contract: e.target.value
            }))}
            value={personData.contract}/>
          </form>
        </th>
        <th>
          <form>
            <input placeholder='...' onChange={(e)=>setPersonData((prevState)=>({
              ...prevState,
              price: +e.target.value
            }))}
            value={personData.price}/>
          </form>
        </th>
        <th><form onSubmit={handleSubmitPerson}><button>save</button></form></th>
        </tr>
        {
          persons.map(person => {
            return(
            <tr><td>{person.name}</td><td>{person.contract}</td><td>{person.price}</td></tr>
            )})
        }
        <tr><td>-</td><td>-</td><td>-</td></tr>
        
      </table>
    </div>
  );
}

export default App;
