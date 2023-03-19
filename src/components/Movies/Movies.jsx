import MoviesCard from "./MoviesCard/MoviesCard";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";
import { useState } from "react";

import movies1 from '../../images/movies/movies1.svg';
import movies2 from '../../images/movies/movies2.svg';
import movies3 from '../../images/movies/movies3.svg';
import movies4 from '../../images/movies/movies4.svg';
import movies5 from '../../images/movies/movies5.svg';
import movies6 from '../../images/movies/movies6.svg';
import movies7 from '../../images/movies/movies7.svg';
import movies8 from '../../images/movies/movies8.svg';
import movies9 from '../../images/movies/movies9.svg';
import movies10 from '../../images/movies/movies10.svg';
import movies11 from '../../images/movies/movies11.svg';
import movies12 from '../../images/movies/movies12.svg';
import More from "./More/More";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import BurgerMenu from "../BurgerMenu/burgerMenu";

function Movies () {

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
                <MoviesCard 
                    moviesTitle="33 слова о дизайне"
                    moviesDuration="1ч 47м"
                    moviesImage={movies4}
                />
                <MoviesCard 
                    moviesTitle="33 слова о дизайне"
                    moviesDuration="1ч 47м"
                    moviesImage={movies5}
                />
                <MoviesCard 
                    moviesTitle="33 слова о дизайне"
                    moviesDuration="1ч 47м"
                    moviesImage={movies6}
                />
                <MoviesCard 
                    moviesTitle="33 слова о дизайне"
                    moviesDuration="1ч 47м"
                    moviesImage={movies7}
                />
                <MoviesCard 
                    moviesTitle="33 слова о дизайне"
                    moviesDuration="1ч 47м"
                    moviesImage={movies8}
                />
                <MoviesCard 
                    moviesTitle="33 слова о дизайне"
                    moviesDuration="1ч 47м"
                    moviesImage={movies9}
                />
                <MoviesCard 
                    moviesTitle="33 слова о дизайне"
                    moviesDuration="1ч 47м"
                    moviesImage={movies10}
                />
                <MoviesCard 
                    moviesTitle="33 слова о дизайне"
                    moviesDuration="1ч 47м"
                    moviesImage={movies11}
                />
                <MoviesCard 
                    moviesTitle="33 слова о дизайне"
                    moviesDuration="1ч 47м"
                    moviesImage={movies12}
                />
            </MoviesCardList>
            <More />
            <Footer />
            <BurgerMenu
            isOpen={isBurgerOpen} 
            onClose={closePopup}
            />
        </section>
    )
}

export default Movies;