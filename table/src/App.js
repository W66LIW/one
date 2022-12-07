import React, {useState} from 'react';
import './App.css';

const personInput = {
  name: "",
  contract: "",
  price: "",
}

const edit = {
  isEdit: false,
  personIndex: null
}

function App() {
  const [personData, setPersonData] = useState(personInput);
  const [persons, setPersons] = useState([]);
  const [editablePersonData, setEditablePersonData] = useState(edit
  //   {
  //   isEdit: false,
  //   personIndex: null
  // }
  );

  const isInputFilled = () => personData.name && personData.contract && personData.price;
  
  const handleSubmitPerson = (e) => {
    e.preventDefault();
    if (isInputFilled()){
      if(editablePersonData.isEdit){
        const editablePersons = persons;
        editablePersons.splice((editablePersonData.personIndex), 1, personData);
        setPersons(editablePersons);
        setEditablePersonData(edit)
      } else {
        setPersons((prevState) => [personData, ...prevState])};
    setPersonData(personInput);}
  }

  const handleClickPerson = (data, index) => {
    // editablePersonData.isEdit = true;
    // editablePersonData.personIndex = index;
    
    setEditablePersonData({
      isEdit: true,
      personIndex: index
    })
    setPersonData(data);
    
    console.log(data, `index ${index}`);
    console.log(editablePersonData);
    console.log(persons);

  }

//   const handleKeyDown = (e) => {
//    // e.preventDefault();
//    if (e.keyCode === 13)  {
//     console.log("key down")
//   //    handleSubmitPerson()
// }
//   } (in the tag tabIndex={13} onKeyDown={handleKeyDown})

  return (
    <div className="App-header">
      <table>
        <tbody>
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
       
        <th><form onSubmit={handleSubmitPerson}><button type='submit'>save</button></form></th>
        </tr>
        
        {
          persons.map((person, index) => {
            return(
            <tr key={persons.indexOf(person)} onClick={()=>handleClickPerson(person, index)}><td>{person.name}</td><td>{person.contract}</td><td>{person.price}</td></tr>
            )})
        }
       </tbody>
      </table>
    </div>
  );
}


export default App;
