function SearchForm () {
    return (
        <section className="searchForm"> 
            <form className="searchForm__form">
                <input className="searchForm__field" required placeholder="Фильм" type="search"></input>
                <button type="submit" className="searchForm__button link"></button>
            </form>    
            <div className="searchForm__full-length">
                <button type="radio" className="searchForm__switch link"></button>
                <p className="searchForm__full-length-label">Короткометражки</p>
            </div>
        </section>
    )
}

export default SearchForm;