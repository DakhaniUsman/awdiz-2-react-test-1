
import { useState } from 'react';
import './App.css' 
const App = () => {

  const [todos, setToDos] = useState(["Eat", "Sleep","Work"]);
  const [item,setItem] = useState("")

  const addToDo = () => {
    setToDos([...todos,item]);
    setItem("")
  }

  return (
    <div className="App">
      
      <h1>To Do App</h1>

      <div className='todo-app'>
        <div className='input-feild'>
          <input type="text" value={item} placeholder='Enter your todo' onChange={(event)=> setItem(event.target.value)}/>
          <button onClick={addToDo}>+</button>
        </div>
        <div>
          {todos.map((todo,index)=> (
            <div key={index}>
              <h3>{index + 1}.{todo}</h3>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default App;
