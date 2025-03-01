import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(["Eat", "Sleep", "Work"]);
  const [item, setItem] = useState("");
  const [editItem, setEditItem] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const addToDo = () => {
    if (item.trim() === "") {alert("Kindly Add to do"); return;};
    setTodos([...todos, item]);
    setItem("");
  };  


  const deleteToDo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    console.log(newTodos);
    setTodos(newTodos);
  };


  const editToDo = (index) => {
    // console.log(index,editItem)
    setIsEditing(true);
    setEditIndex(index);
    setEditItem(todos[index]);
  };


  const saveToDo = () => {
    if (editItem.trim() === "") return;
    const updatedTodos = [...todos];
    updatedTodos[editIndex] = editItem;
    console.log(updatedTodos,editIndex,editItem);
    setTodos(updatedTodos)
    setEditItem('')
    setIsEditing(false);
    setEditIndex(null)
  };
  return (
    <div className="App">
      <h1>To DO App</h1>

      <div>
        <input
          type="text"
          value={item}
          onChange={(event) => setItem(event.target.value)}
        />
        <button onClick={addToDo}>+</button>
      </div>
      <div>
        {todos.map((todo, index) => (
          <div key={index}>
            {isEditing && editIndex === index ? (
              <input type="text" value={editItem}  onChange={(event)=> setEditItem(event.target.value)}/>
            ) : (
              <h3>
                {index + 1}. {todo}
              </h3>
            )}

            <div>
              {isEditing && editIndex === index ? (
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


  // <ToDo data={dataObject}
}

export default App;
