import { useState } from "react";
import MoviesCard from "./MoviesCard/MoviesCard";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";
import Footer from "../Footer/Footer";

import movies1 from '../../images/movies/movies1.svg';
import movies2 from '../../images/movies/movies2.svg';
import movies3 from '../../images/movies/movies3.svg';
import Header from "../Header/Header";
import BurgerMenu from "../BurgerMenu/burgerMenu";

function SavedMovies () {

    const [isBurgerOpen, setIsBurgerOpen] = useState(false);

    function handleBurgerClick() {
        setIsBurgerOpen(true);
    }

    function closePopup() {
        setIsBurgerOpen(false);
    }

    return (
        <section className="movies">
            <Header 
            onBurgerOpen = {handleBurgerClick} 
            />
            <SearchForm />
            <MoviesCardList>
                <MoviesCard 
                    moviesTitle="33 слова о дизайне"
                    moviesDuration="1ч 47м"
                    moviesImage={movies1}
                />
                <MoviesCard 
                    moviesTitle="33 слова о дизайне"
                    moviesDuration="1ч 47м"
                    moviesImage={movies2}
                />
                <MoviesCard 
                    moviesTitle="33 слова о дизайне"
                    moviesDuration="1ч 47м"
                    moviesImage={movies3}
                />
            </MoviesCardList>
            <Footer />
            <BurgerMenu
            isOpen={isBurgerOpen} 
            onClose={closePopup}
            />
        </section>
    )
}

export default SavedMovies;