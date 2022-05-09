import animeInfo from "../animeInfo";
import { Link } from 'react-router-dom';

// function Anime (props){
// return (
//     <div className="container">

//         <img src="https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/d48d4a62b0ac6381c87bd040b69b0a89.jpeg"/>

//     </div>
// )
// }
// looped through the array of object created so that it can be displayed on the screen.
// How to pass state to AnimeShow.(pass the anime object that was clicked.) 
function Home(props) {
    console.log(props);
    let animeJSX = props.animeInfo.map(anime => (
        <li>
            <Link onClick={props.setAnime(anime)} to="/AnimeShow"> {anime.cover} </Link>
            <Link onClick={props.setAnime(anime)} to="/AnimeShow"> Title: {anime.name} </Link>
        </li>
    ))
    return (
        <>
            <ul className="anime-info">
                {animeJSX}
            </ul>
        </>
    )
}

export default Home;