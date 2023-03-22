function Footer () {
    return (
        <footer className="footer">
            <p className="footer__header">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__container">
                <p className="footer__date">&copy;2023</p>
                <ul className="footer__list">
                    <a href="https://practicum.yandex.ru/" target='blank'>
                        <li className="footer__link link">Яндекс.Практикум</li>
                    </a>
                    <a href="https://github.com/Ksesha69" target='blank'>
                        <li className="footer__link link">Github</li>
                    </a>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;