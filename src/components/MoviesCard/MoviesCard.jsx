function MoviesCard ({ movie, userMovies, onSaveMovie, onDeleteMovie }) {

    const savedMovie = userMovies?.find((i) => i.movieId === movie.id);

    const SaveButtonClassName = (
        `link moviesCard__button ${savedMovie && 'moviesCard__button_active'}`);
    
        function saveClick() {
            if(savedMovie) {
                onDeleteMovie(savedMovie)
            }
            else {
                onSaveMovie(movie);
            }
        }

        function deleteClick() {
            onDeleteMovie(movie);
        }

    return (
        <li className="moviesCard">
            <div className="moviesCard__top">
            {!userMovies ?
                <button 
                type="button" 
                className={SaveButtonClassName}
                onClick={saveClick}
                /> :
                <button 
                type="button" 
                className="moviesCard__delete link"
                onClick={deleteClick}
                />
                }
                <div className="moviesCard__item">
                    <p className="moviesCard__title">{movie.nameRU}</p>
                    <p className="moviesCard__duration">{movie.duration}</p>
                </div>
            </div>
            <a href={movie.trailerLink} target="_blank" rel="noreferrer">
                {!userMovies ?
                <img className="moviesCard__image"
                src={`https://api.nomoreparties.co/${movie.image.url}`}
                alt={movie.nameRU}
                /> :
                <img className="moviesCard__image"
                src={`https://api.nomoreparties.co/${movie.image.url}`}
                alt={movie.nameRU}
                />}
            </a>
        </li>
    )
}

export default MoviesCard;