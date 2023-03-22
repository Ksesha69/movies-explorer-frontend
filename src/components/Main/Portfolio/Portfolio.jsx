import symbol from '../../../images/стрелка.svg';
function Portfolio () {
    return(
        <div className="portfolio">
            <h3 className="portfolio__header">Портфолио</h3>
            <ul className="portfolio__list">
                <li className="portfolio__site">
                    <a href='https://github.com/Ksesha69' className='portfolio__link link' target="blank">
                        <p className="portfolio__site-label">Статичный сайт</p>
                        <img 
                        className="portfolio__site-symbol link"
                        alt="стрелка"
                        src={symbol}
                        />
                    </a>
                </li>
                <li className="portfolio__site">
                    <a href='https://github.com/Ksesha69' className='portfolio__link link' target="blank">
                        <p className="portfolio__site-label">Адаптивный сайт</p>
                        <img 
                        className="portfolio__site-symbol link"
                        alt="стрелка"
                        src={symbol}
                        />
                    </a>
                </li>
                <li className="portfolio__site">
                    <a href='https://github.com/Ksesha69' className='portfolio__link link' target="blank">
                        <p className="portfolio__site-label">Одностраничное приложение</p>
                        <img 
                        className="portfolio__site-symbol"
                        alt="стрелка"
                        src={symbol}
                        />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Portfolio;