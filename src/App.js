import './App.css';
import AnimeShow from './components/AnimeShow';
import Header from './components/Header';
import Author from './pages/Author';
import Help from './pages/Help';
import Home from './pages/Home';
import {useState} from 'react';
import { Routes, Route } from 'react-router-dom';


const animeInfo = [{name: "Demon Slayer: Kimetsu no Yaiba Season 2", cover: <img src="https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/d48d4a62b0ac6381c87bd040b69b0a89.jpeg"/>}, {name: "Spy X Family", cover: <img src="https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/32d90e0628aeb20fcd2e8879188d6b70.jpeg"/>}, {name: "In the Land of Leadale", cover: <img src="https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/abd584bee82549a7ddd1c446ce630788.jpeg"/>}, {name:"The Rising of the Shield Hero 2", cover: <img src="https://img1.ak.crunchyroll.com/i/spire4/74dc98daf4362012ff758c7f4a13b2381649904825_full.jpg"  width="240" height="360"/>}, {name:"Ranking of Kings", cover: <img src="https://img1.ak.crunchyroll.com/i/spire1/51f20f9368567adc8bef172e30f812b11646337220_full.jpg"  width="240" height="360"/>}, {name: "JuJutsu Kaisen", cover: <img src="https://img1.ak.crunchyroll.com/i/spire3/02c909684baa37d6ef70a9df742d58951610752067_full.jpg"  width="240" height="360"/>}, {name: "RE-Zero: Starting Life in Another World", cover: <img src="https://img1.ak.crunchyroll.com/i/spire3/291c6c3b60857afabe46899f848079a41610403802_full.jpg"  width="240" height="360"/>}, {name: "86 Eighty-Six", cover: <img src="https://img1.ak.crunchyroll.com/i/spire1/e912a5b800502bb400e7dfa454f521431633316826_full.jpg"  width="240" height="360"/>}, {name: "Tomodachi Game", cover: <img src="https://img1.ak.crunchyroll.com/i/spire3/2529a8560eb6f5ba3ddeec11827538451649170065_full.jpg"  width="240" height="360"/>}, {name: "Love of Kill", cover: <img src="https://img1.ak.crunchyroll.com/i/spire4/646a8dcd7af132fe009f777ab50a3eda1642411280_full.jpg"  width="240" height="360"/>}, {name:"Kaguya-Sama: Love is War", cover: <img src="https://img1.ak.crunchyroll.com/i/spire1/cfaaa751ce731f3abecca872ddc9e7ac1649904522_full.jpg" width="240" height="360"/>}]

function App() {
  const [animeToShow, setAnimeToShow] = useState({});
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/Home" element={<Home animeInfo={animeInfo} setAnime={setAnimeToShow}/>} />
        <Route path="/Author" element={<Author />} />
        <Route path="/Help" element={<Help />} />
        <Route path="/AnimeShow" element={<AnimeShow anime={animeToShow} />} />
      </Routes>

    </div>
  );
}

export default App;
      