import logo from './logo.svg';
import './App.css';
import axios from "axios"
import { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      songs: [],
    }
  }

  componentDidMount = () => {
    this.getAllSongs;
  }

  getAllSongs = async() => {
    await axios
    .get("http://127.0.0.1:8000/musicapp/")
    .then((res) => {
        console.log(res.data);
        const people = res.data;
        this.setState({ people });
    }); 
  }

deleteSongs = async (songs) => {
    let response = await axios.delete("http://127.0.0.1:8000/musicapp/" + songId + "/");
    this.getAllSongs();
    return response.status;
  }

sortSongsByTitle = () => {
    this.setState({songs: this.state.songs.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()))});
}

sortSongsByAlbum = () => {
    this.setState({songs: this.state.songs.sort((a, b) => a.album.toLowerCase().localeCompare(b.album.toLowerCase()))});
}

sortSongsByArtist = () => {
    this.setState({songs: this.state.songs.sort((a, b) => a.artist.toLowerCase().localeCompare(b.artist.toLowerCase()))});
}

sortSongsByGenre = () => {
    this.setState({songs: this.state.songs.sort((a, b) => a.genre.toLowerCase().localeCompare(b.genre.toLowerCase()))});
}

sortSongsByRealeaseDate = () => {
    this.setState({songs: this.state.songs.sort((a,b)=>a.getTime()-b.getTime())});
}

render(){
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
}

export default App;
