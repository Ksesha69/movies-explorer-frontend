import React from "react";

function MoviesCardList ({children}) {
    return (
        <section className="moviesCardList">
            <ul className="moviesCardList__container">{children}</ul>
        </section>
    )
}

export default MoviesCardList;