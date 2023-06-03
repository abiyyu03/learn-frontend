import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const StyledNavbar = styled.div`
    background-color: #F72585;
    padding: 1rem;
    color: #fff;

    .navbar {
        display: flex;
        flex-direction: column;
    }

    .navbar_brand { 
        font-size: 2rem;
    }

    ul {
        display: flex;
        flex-direction: column;
        list-style: none;
    }

    li {
        margin-bottom: 1rem ;
    }

    .navbar_link {
        text-decoration: none;
        color:white;
    }
    
    @media (min-width: 768px) {
        .navbar {
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        } 

        .navbar_brand {
            margin-bottom: 0;
        }

        ul {
            flex-direction: row;
        }

        li {
            margin: 0 1rem;
        }
    }
`
const Navbar = () => {
    return (
        <StyledNavbar>
            <nav className="navbar">
                <div className="navbar_brand">
                    <h4>Movie App</h4>
                </div>
                <ul>
                    <li>
                        <Link to="/" className="navbar_link">Home</Link>
                    </li>
                    {/* <li>
                        <Link to="/movie/create-movie" className="navbar_link">Add Movie</Link>
                    </li> */}
                    <li>
                        <Link to="/movie/popular" className="navbar_link">Popular</Link>
                    </li>
                    <li>
                        <Link to="/movie/top-rated" className="navbar_link">Top Rated</Link>
                    </li>
                    <li>
                        <Link to="/movie/now-playing" className="navbar_link">Now Playing</Link>
                    </li>
                    <li>
                        <Link to="/login" className="navbar_link">Login</Link>
                    </li>
                    <li>
                        <Link to="/register" className="navbar_link">Register</Link>
                    </li>
                </ul>
            </nav>
        </StyledNavbar>
    )
}

export default Navbar