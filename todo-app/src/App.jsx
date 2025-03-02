import { useState } from "react";
import "./App.css";
const App = () => {
  const [todos, setTodos] = useState(["Eat", "Sleep", "Conquer", "Repeat"]);
  // console.log(todos);
  const [item, setItem] = useState("");

  const [isEditing, setIsEditing] = useState(false);

  const [editIndex, setEditIndex] = useState(null);

  const [editItem, setEditItem] = useState("");

  const addToDo = () => {
    if (item.trim() === "") {
      alert("Kindly enter your todo!");
      return;
    }
    setTodos([...todos, item]);
    setItem("");
  };

  const deleteToDo = (index) => {
    // console.log(index)

    setTodos(todos.filter((_, i) => i !== index));
    setIsEditing(false);
    setEditItem("");
  };

  const editToDo = (index) => {
    setEditIndex(index);
    setIsEditing(true);
    

  };

  const saveToDo = () => {
    if (editItem.trim() === "") {
      alert("Kindly enter your todo!");
      return;
    }
    const updateTodo = [...todos];
    console.log(updateTodo);
    updateTodo[editIndex] = editItem;
    console.log(updateTodo);
    setTodos(updateTodo);
    setIsEditing(false);
    setEditItem("");

  };
  return (
    <div className="App">
      <h1>To Do App</h1>
      <div className="todo-app">
        <div className="input-field">
          <input
            type="text"
            value={item}
            placeholder="Enter your todo"
            onChange={(event) => setItem(event.target.value)}
            className="input"
          />
          <button className="btn add" onClick={addToDo}>
            +
          </button>
        </div>
        <div className="todo-list">
          {todos.map((todo, index) => (
            <div key={index} className="todo-item">
              <div>
              {isEditing && editIndex === index ? (
                <>
                {index + 1}. 
                  <input
                  type="text"
                  value={editItem}
                  onChange={(event) => setEditItem(event.target.value)}
                  className="input"
                />
                </>
              ) : (
                <h3>
                  {index + 1}. {todo}
                </h3>
              )}
              </div>

              <div className="buttons">
                {isEditing && editIndex === index ? (
                  <button className="btn" onClick={saveToDo}>
                    Save
                  </button>
                ) : (
                  <button className="btn" onClick={() => editToDo(index)}>
                    Edit
                  </button>
                )}
                <button className="btn" onClick={() => deleteToDo(index)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
