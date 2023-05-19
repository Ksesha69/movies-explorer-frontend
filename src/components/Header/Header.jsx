import logo from '../../images/logo.svg';
import auth from '../../images/auth.svg'; 
import { NavLink } from "react-router-dom";

function Header ({ loggedIn, onBurgerOpen }) {
    if (window.location.pathname === "/login") return null;
    if (window.location.pathname === "/signup") return null;
    return !loggedIn ? (
        <header className="headerAuth">
            <NavLink to="/">
                <img 
                className="headerAuth__logo link"
                alt="логотип"
                src={logo}
            />
            </NavLink>
                <div className='headerAuth__auth'>
                    <NavLink to="/signup" className="headerAuth__register link">
                        <p>Регистрация</p>
                    </NavLink>
                    <NavLink to="/login" className="headerAuth__login link">
                        <p>Войти</p>
                    </NavLink>
                </div>
        </header>
    )
    : (
        <header className="header">
            <NavLink to="/">
                <img 
                    className="header__logo link"
                    alt="логотип"
                    src={logo}
                />
            </NavLink>
            <button 
                onClick={onBurgerOpen}
                className="header__burger link">
                    &#9776;
            </button>
            <div className="header__nav">
                <NavLink to="/movies" className="header__linkMovies link">Фильмы</NavLink>
                <NavLink to="/saved-movies" className="header__linkSave link">Сохраненные фильмы</NavLink>
            </div>
            <NavLink to="/Profile" className="header__auth link">
                <p className='header__profile'>Аккаунт</p>
                <div className='header__auth-logo'>
                    <img 
                        className="header__auth-image"
                        alt="логотип"
                        src={auth}
                    />
                </div>
            </NavLink>
        </header>
    )
}

export default Header; 