import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(["Eat", "Sleep", "Conquer", "Repeat"]);
  const [item, setItem] = useState("");
  const [editing, setEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null); 
  const [editItem, setEditItem] = useState("");

  const addToDo = () => {
    if (item.trim() === ""); // Prevent adding empty todos
    setTodos([...todos, item]);
    setItem(""); // Clear input after adding
  };

  const deleteToDo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const editToDo = (index) => {
    setEditing(true);
    setEditIndex(index);
    setEditItem(todos[index]); // Set editItem value
  };  

  const saveToDo = () => {
    if (editItem.trim() === "") return; // Prevent empty edits
    const updatedTodos = [...todos];
    updatedTodos[editIndex] = editItem;
    setTodos(updatedTodos);
    setEditItem(""); // Clear edit input
    setEditing(false);
    setEditIndex(null);
  };

  return (
    <div className="App">
      <h1>To Do App</h1>

      <div className="app">
        <div className="input-field">
          <input
            type="text"
            value={item}
            placeholder="Enter your todo"
            onChange={(event) => setItem(event.target.value)}
          />
          <button onClick={addToDo}>+</button>
        </div>

        {todos.map((todo, index) => (
          <div key={index} className="to-do-app">
            {editing && editIndex === index ? (
              <input
                value={editItem}
                onChange={(event) => setEditItem(event.target.value)}
              />
            ) : (
              <h3>
                {index + 1}. {todo}
              </h3>
            )}
            <div className="buttons">
              {editing && editIndex === index ? (
                <button onClick={saveToDo}>Save</button>
              ) : (
                <button onClick={() => editToDo(index)}>Edit</button>
              )}
              <button onClick={() => deleteToDo(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
