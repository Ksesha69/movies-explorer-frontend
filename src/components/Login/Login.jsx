import { NavLink, Link } from "react-router-dom";
import logo from '../../images/logo.svg'

function Login () {
    return (
        <section className="login">
            <div className="login__container">
            <div className="login__top">
                <NavLink to="/">
                    <img 
                        className="header__logo main__link"
                        alt="логотип"
                        src={logo}
                    />
                </NavLink>
                <h2 className="login__header">Рады видеть!</h2>
            </div>
            <div className="login__form">
                <div className="login__form_email">
                    <p className="login__form_label">E-mail</p>
                    <input 
                    type="email" 
                    className="login__form_input"
                    defaultValue="pochta@yandex.ru">
                    </input>
                </div>
                <div className="login__form_pass">
                    <p className="login__form_label">Пароль</p>
                    <input 
                    type="password" 
                    className="login__form_input">
                    </input>
                    <Link to="/movies" className="login__link">
                        <button type="button" className="login__button main__link">Войти</button>
                    </Link>
                    <div className="login__redirection">
                        <p className="login__redirection_label">Ещё не зарегистрированы?</p>
                        <Link to="/signup" className="login__redirection_link main__link">Регистрация</Link>
                    </div>
                </div>
            </div>
            </div>

        </section>
    )
}

export default Login;