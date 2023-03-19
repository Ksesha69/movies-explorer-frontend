
function MoviesCard ({moviesTitle, moviesDuration, moviesImage}) {

    return (
        <li className="moviesCard">
            <div className="moviesCard__top">
                <button 
                type="button" 
                className='saveMoviesCard__button'
                />
                <div className="moviesCard__item">
                    <p className="moviesCard__item_title">{moviesTitle}</p>
                    <p className="moviesCard__item_duration">{moviesDuration}</p>
                </div>
            </div>
            <img className="moviesCard__item_image"
                src={moviesImage}
                alt="постер"
                />
        </li>
    )
}

export default MoviesCard;