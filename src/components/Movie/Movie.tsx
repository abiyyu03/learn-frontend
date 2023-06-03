// import styles from './Movie.module.css';
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
            <img src={movie.poster || `http://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.year || movie.release_date}</p>
        </StyledMovie>
    );
}

export default Movie;