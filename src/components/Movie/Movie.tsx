// import styles from './Movie.module.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledMovie = styled.div`
    margin-bottom: 1rem;
    
    img {
        border-radius: 25px;
        max-width: 100%;
        height: auto;
        margin-bottom: 1rem;
    }

    h3 {   
        color: #F72585;
        font-size: 1.6rem;
        margin-bottom: 0.5rem;
    }

    p {  
        color: #64748b;
    }

    .link {
        text-decoration:none;
    }
    @media (min-width: 768px) { 
        flex-basis: 50%; 
      }
      
      /* Large Screen */
      @media (min-width: 992px) { 
        flex-basis: 25%;
        padding: 1rem; 
      }
`;

const Movie = (props: any) => {
    const { movie } = props;

    return (
        <StyledMovie>
            <Link to={`/movie/${movie.id}`} className="link">
                <img src={movie.poster || `https://image.tmdb.org/t/p/w300/${movie.poster_path}` || ''}
                    alt={movie.title} />
                <h3>{movie.title}</h3>
                <p>{movie.year || movie.release_date}</p>
            </Link>
        </StyledMovie>
    );
}

export default Movie;