import { Link } from 'react-router-dom'

const Header = () => {
    return (

        <nav>
            <h1>SOUL-LOVE ANIME</h1>
            <p>Welcome to Soul-Love Anime! The number 1 blog website in the NYC-area for anime lovers.This dating website was created for people to connect with their shared love for anime.</p>
            <ul>
                <li>
                    <Link to="/Home">Home</Link>
                </li>
                <li>
                    <Link to="/Author">Author</Link>
                </li>
                <li>
                    <Link to="/Help">Help</Link>
                </li>
                {/* <li>

                    <Link to="/AnimeBlog">AnimeBlog</Link>
                </li> */}

            </ul>
        </nav>

    )
}




export default Header;