import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";
import SearchForm from "../Movies/SearchForm/SearchForm";
import Footer from "../Footer/Footer";

function SavedMovies ({userMovies, onDeleteMovie}) {
    return (
        <section className="movies">
            <SearchForm />
            <MoviesCardList>
                {
            userMovies?.map((userMovie) => (
            <MoviesCard 
            movie={userMovie}
            userMovie={userMovie}
            onDeleteMovie={onDeleteMovie}
            key={userMovie.id}
            />
            ))}
            </MoviesCardList>
            <Footer />
        </section>
    )
}

export default SavedMovies;