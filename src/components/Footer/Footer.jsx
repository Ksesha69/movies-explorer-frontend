function Footer () {
    return (
        <footer className="footer">
            <p className="footer__header">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__container">
                <p className="footer__date">&copy;2023</p>
                <ul className="footer__list">
                    <a href="https://practicum.yandex.ru/">
                    <li className="footer__link main__link">Яндекс.Практикум</li>
                    </a>
                    <a href="https://github.com/Ksesha69">
                    <li className="footer__link main__link">Github</li>
                    </a>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;