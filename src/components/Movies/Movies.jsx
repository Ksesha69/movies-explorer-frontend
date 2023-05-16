import { useState } from 'react';
import MoviesCard from "../MoviesCard/MoviesCard";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";

import More from "./More/More";
import Footer from "../Footer/Footer";
import { useEffect } from 'react';

function Movies ({movies, onSaveMovie, onDeleteMovie}) {

    const [checked, setChecked] = useState(true);
    const [shortMovies, setShortMovies] = useState([]);

    useEffect(() => {
        if (checked) {
            const shortMovies = movies.filter((movie) => {
                return movie.duration <= 40;
            });
    
            setShortMovies(shortMovies);
        }
    }, [checked, movies, setShortMovies]);

    function handleToogleCheck() {
        setChecked(checked);
    }

    return (
        <section className="movies">
            <SearchForm
            handleToogleCheck={handleToogleCheck}
            checked={shortMovies}
            />
            <MoviesCardList>
            {
                movies?.map((movie) => (
                    <MoviesCard
                    movie={movie}
                    key={movie.id}
                    onSaveMovie={onSaveMovie} 
                    onDeleteMovie={onDeleteMovie}                   
                />
            ))}
            </MoviesCardList>
            <More />
            <Footer />
        </section>
    )
}

export default Movies;