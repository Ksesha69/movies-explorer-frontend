function MoviesCard ({moviesTitle, moviesDuration, moviesImage}) {
    return (
        <li className="moviesCard">
            <div className="moviesCard__top">
                <button 
                type="button" 
                className='moviesCard__delete link'
                />
                <div className="moviesCard__item">
                    <p className="moviesCard__title">{moviesTitle}</p>
                    <p className="moviesCard__duration">{moviesDuration}</p>
                </div>
            </div>
            <img className="moviesCard__image"
            src={moviesImage}
            alt="постер"
            />
        </li>
    )
}

export default MoviesCard;