import symbol from '../../../images/стрелка.svg';
function Portfolio () {
    return(
        <div className="portfolio">
            <h3 className="portfolio__header">Портфолио</h3>
            <div className="portfolio__site">
                <p className="portfolio__site_label">Статичный сайт</p>
                <a href='https://github.com/Ksesha69'>
                <img 
                className="portfolio__site_symbol main__link"
                alt="стрелка"
                src={symbol}
                />
                </a>
            </div>
            <div className="portfolio__site">
                <p className="portfolio__site_label">Адаптивный сайт</p>
                <a href='https://github.com/Ksesha69'>
                <img 
                className="portfolio__site_symbol main__link"
                alt="стрелка"
                src={symbol}
                />
                </a>
            </div>
            <div className="portfolio__site">
                <p className="portfolio__site_label">Одностраничное приложение</p>
                <a href='https://github.com/Ksesha69'>
                <img 
                className="portfolio__site_symbol main__link"
                alt="стрелка"
                src={symbol}
                />
                </a>
            </div>
        </div>
    )
}

export default Portfolio;