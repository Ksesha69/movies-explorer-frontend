import { NavLink, Link } from "react-router-dom";
import logo from '../../images/logo.svg'

function Login () {
    return (
        <section className="login">
            <div className="login__container">
                <div className="login__top">
                    <NavLink to="/">
                        <img 
                        className="link"
                        alt="логотип"
                        src={logo}
                        />
                    </NavLink>
                    <h2 className="login__header">Рады видеть!</h2>
                </div>
                <div className="login__form">
                    <div className="login__form-email">
                        <p className="login__form-label">E-mail</p>
                        <input 
                        type="email" 
                        className="login__form-input"
                        defaultValue="pochta@yandex.ru">
                        </input>
                    </div>
                    <div className="login__form-pass">
                        <p className="login__form-label">Пароль</p>
                        <input 
                        type="password" 
                        className="login__form-input">
                        </input>
                        <Link to="/movies" className="login__link">
                            <button type="button" className="login__button link">Войти</button>
                        </Link>
                        <div className="login__redirection">
                            <p className="login__redirection-label">Ещё не зарегистрированы?</p>
                            <Link to="/signup" className="login__redirection-link link">Регистрация</Link>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Login;