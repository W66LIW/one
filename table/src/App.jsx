import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Table from './components/Table';
import Addmonth from './components/Addmonth';
import PersonInput from './components/PersonInput';
import { addPerson } from './reducers/personSlice';


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


function App() {
  const dispatch = useDispatch();
  const [personData, setPersonData] = useState(personInput);
  const [persons, setPersons] = useState([]);
  const [editablePersonData, setEditablePersonData] = useState(edit);
  
  const isInputFilled = () => personData.name && personData.contract && personData.price;




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
        dispatch(addPerson({...personData, id: new Date().toString()}))
      };
      setPersonData(personInput);
    }
  }


  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmitPerson(e);
      // handleSubmitPay(e);
    }
  }

  return (
    <div>
      <Addmonth value = {1}/>
      <div tabIndex={0} onKeyDown={handleKeyDown}>
        <PersonInput/>
        <Table/>
      </div>
    </div>
  );
}


export default App;
