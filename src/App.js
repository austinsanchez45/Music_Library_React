import logo from './logo.svg';
import './App.css';
import axios from "axios"
import { useState } from 'react';


const App = () => {
  // const[MusicTable, setMusicTable] = useState(data);
  const getAllSongs = async() => {
    await axios
    .get(`https://jsonplaceholder.typicode.com/users`)
    .then((res) => {
        console.log(res.data);
        const people = res.data;
        this.setState({ people });
    }); 
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick = {getAllSongs}> Click me! </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
