function SearchForm () {
    return (
        <section className="searchForm"> 
            <div className="searchForm__form">
                <input className="searchForm__field" placeholder="Фильм" type="search"></input>
                <button type="submit" className="searchForm__button"> | &rsaquo;</button>
            </div>    
            <div className="searchForm__full-length">
                    <button type="checkbox" className="searchForm__switch"></button>
                    <p className="searchForm__full-length_label">Короткометражки</p>
            </div>
        </section>
    )
}

export default SearchForm;