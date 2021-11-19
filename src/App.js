import logo from './logo.svg';
import './App.css';
import axios from "axios"
import DisplaySongs from ",/component_songs/DisplaySongs";


const App = () => {
  // const[MusicTable, setMusicTable] = useState(data);
  const getAllSongs = async() => {
    await axios
    .get("http://127.0.0.1:8000/musicapp/")
    .then((res) => {
        console.log(res.data);
        const people = res.data;
        this.setState({ people });
    }); 
  }

  deleteSongs = async (songs) => {
    let response = await axios.delete("http://127.0.0.1:8000/musicapp/");
  }

  handleSubmit = (event)=> {
    event.preventDefault[{}];
    const form_data = {
      title: this.state.title,
      artist: this.state.artist,
      album: this.state.album,
      release_date: this.state.release_date,
      genre: this.state.genre,
    };
    let response = axios.post("http://127.0.0.1:8000/musicapp/", form_data);
    let data = response.data;
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
