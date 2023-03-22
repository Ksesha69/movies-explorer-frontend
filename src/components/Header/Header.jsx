import logo from '../../images/logo.svg';
import auth from '../../images/auth.svg'; 
import { NavLink } from "react-router-dom";

function Header ({ onBurgerOpen }) {
    return (
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