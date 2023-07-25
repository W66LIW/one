import React from 'react';
import './style/css/index.css';
import Table from './components/Table';
import Addmonth from './components/Addmonth';
import PersonInput from './components/PersonInput';
import Modal from './components/Modal';

function App() {
   return (
    <div className='App'>
      <Addmonth/>
      <PersonInput/>
      <Table/>
      <Modal/>
    </div>
  );
}


export default App;
