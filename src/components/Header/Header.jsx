import logo from '../../images/logo.svg';
import auth from '../../images/auth.svg'; 
import { NavLink } from "react-router-dom";

function Header ({ onBurgerOpen }) {


    return (
        <header className="header">
            <NavLink to="/">
            <img 
                className="header__logo main__link"
                alt="логотип"
                src={logo}
            />
            </NavLink>
            <button 
            onClick={onBurgerOpen}
            className="header__burger main__link">
                &#9776;
                </button>
            <div className="header__nav">
            <NavLink to="/movies" className="header__linkMovies main__link">Фильмы</NavLink>
            <NavLink to="/saved-movies" className="header__linkSave main__link">Сохраненные фильмы</NavLink>
            </div>
            <NavLink to="/Profile" className="header__auth main__link">
                <p>Аккаунт</p>
                <div className='header__auth_logo'>
                    <img 
                    className="header__auth_image"
                    alt="логотип"
                    src={auth}
                    />
                </div>
            </NavLink>
        </header>
    )
}

export default Header; 