import logo from '../../images/logo.svg';
import { NavLink } from "react-router-dom";

function HeaderAuth () {
    return (
        <header className="headerAuth">
            <NavLink to="/">
            <img 
                className="header__logo main__link"
                alt="логотип"
                src={logo}
            />
            </NavLink>
            <div className='headerAuth__auth'>
                <NavLink to="/signup" className="header__register main__link">
                    <p>Регистрация</p>
                </NavLink>
                <NavLink to="/login" className="header__login main__link">
                    <p>Войти</p>
                </NavLink>
            </div>
        </header>
    )
}

export default HeaderAuth; 