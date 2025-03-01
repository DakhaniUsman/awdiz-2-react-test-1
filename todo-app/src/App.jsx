// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ToDo from './components/ToDo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='todo' element={<ToDo/>}/>
      </Routes>
    </div>
  );
}

export default App;
