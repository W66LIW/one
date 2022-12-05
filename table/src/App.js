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

  const isInputFilled = () => personData.name && personData.contract && personData.price;
  
  const handleSubmitPerson = (e) => {
    e.preventDefault();
    if (isInputFilled()){
    setPerson((prevState) => [personData, ...prevState]);
    setPersonData(personInput);}
  }

  const handleKeyDown = (e) => {
   // e.preventDefault();
   if (e.keyCode === 13)  {
    console.log("key down")
  //    handleSubmitPerson()
}
  }

  console.log(persons)

  return (
    <div className="App-header" tabIndex={13} onKeyDown={handleKeyDown}>
      <table onKeyDown={()=>handleKeyDown()}>
        <tbody>
          <tr>
          <th>
          <form>
            <input type="text" placeholder="..." onChange={(e) => setPersonData((prevState) => ({
              ...prevState,
              name: e.target.value
              }))}
              value={personData.name}required/>
          </form>
        </th>
        <th>
          <form>
            <input type="text" placeholder='...' onChange={(e) => setPersonData((prevState)=>({
              ...prevState,
              contract: e.target.value
            }))}
            value={personData.contract}required/>
          </form>
        </th>
        <th>
          <form>
            <input placeholder='...' onChange={(e)=>setPersonData((prevState)=>({
              ...prevState,
              price: +e.target.value
            }))}
            value={personData.price} required/>
          </form>
        </th>
       
        <th><form onSubmit={handleSubmitPerson}><button type='submit'>save</button></form></th>
        </tr>
        </tbody>
        {
          persons.map((person) => {
            return(
            <tr><td>{person.name}</td><td>{person.contract}</td><td>{person.price}</td></tr>
            )})
        }
       
      </table>
    </div>
  );
}


export default App;
