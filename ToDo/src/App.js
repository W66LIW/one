import { useState } from 'react';
import Term from './Term';
import ToDoForm from './ToDoForm';

function App() {
  const [todos, setTodos] = useState([]);

  const addTask = (userInput) => {
    if(userInput) {
      const newItem = {
        id: Math.random().toString(36),
        task: userInput,
        complete: false,
      }
      
      setTodos([...todos, newItem])
      
    }
  };

  const removeTask = (id) => {
    setTodos([...todos.filter((term) => term.id !== id)])
  };

  const handleToggle = (id) => {
    setTodos([...todos.map((term) => 
      term.id === id ? {...term, complete: !term.complete} : {...term})])
  };


  return (
    <div className="App">
      <header>
        <h1>Задачи: {todos.length}</h1>
              
      </header>
      <ToDoForm addTask={addTask} />


      {todos.map((term) => {
        return (
          <Term
          term={term}
          key={term.id} 
          toggleTask={handleToggle}
          removeTask={removeTask} />
        )
      })}
    </div>
  )
}

export default App;
