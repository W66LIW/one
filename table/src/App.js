import React, {useState} from 'react';
import './App.css';

const personInput = {
  name: "",
  contract: "",
  price: 0,
}

function App() {
  const [personData, setPersonData] = useState(personInput);
  const [persons, setPersons] = useState([]);
  console.log(personData)
  return (
    <div className="App-header">
      <table>
        <tr>
          <th>
          <form>
            <input type="text" placeholder="..." onChange={(e) => setPersonData((prevState) => ({
              ...prevState,
              name: e.target.value
              }))}/>
          </form>
        </th>
        <th>
          <form>
            <input type="text" placeholder='...' onChange={(e) => setPersonData((prevState)=>({
              ...prevState,
              contract: e.target.value
            }))}/>
          </form>
        </th>
        <th>
          <form>
            <input type="number" placeholder='...' onChange={(e)=>setPersonData((prevState)=>({
              ...prevState,
              price: e.target.value
            }))}/>
          </form>
        </th>
        <th><button>save</button></th>
        </tr>
        <tr><td>{personData.name}</td><td>-</td><td>-</td></tr>
        <tr><td>-</td><td>-</td><td>-</td></tr>
        
      </table>
    </div>
  );
}

export default App;
