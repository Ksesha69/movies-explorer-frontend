import { useState } from "react";

function MoviesCard ({moviesTitle, moviesDuration, moviesImage}) {

    const [isSave, setIsSave] = useState(false);

    const SaveButtonClassName = (
        `moviesCard__button ${isSave ? 'moviesCard__button_active' : ""}`);
    
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