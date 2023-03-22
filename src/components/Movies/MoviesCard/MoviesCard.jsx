import { useState } from "react";

function MoviesCard ({moviesTitle, moviesDuration, moviesImage}) {

    const [isSave, setIsSave] = useState(false);

    const SaveButtonClassName = (
        `moviesCard__button link ${isSave ? 'moviesCard__button_active' : ""}`);
    
        function handleSaveClick() {
            setIsSave(true);
        }
    return (
        <li className="moviesCard">
            <div className="moviesCard__top">
                <button 
                type="button" 
                className={SaveButtonClassName}
                onClick={handleSaveClick}
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