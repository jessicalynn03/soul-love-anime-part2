import animeInfo from "../animeInfo";

// function Anime (props){
// return (
//     <div className="container">
    
//         <img src="https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/d48d4a62b0ac6381c87bd040b69b0a89.jpeg"/>
    
//     </div>
// )
// }
// looped through the array of object created so that it can be displayed on the scree. 
function Home (props) {
    console.log(props);
    let animeJSX = props.animeInfo.map(anime => (
        <li>
            {anime.cover}
            Title: {anime.name}
        </li>
    ))
return (
    <>  
        <ul className="anime-info">
            <li onClick={animeJSX}/>
        </ul>
    </>
)
}

export default Home;