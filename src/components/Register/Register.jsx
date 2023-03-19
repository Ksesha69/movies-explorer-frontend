import { NavLink, Link } from "react-router-dom";
import logo from '../../images/logo.svg'

function Register () {
    return (
        <section className="register">
            <div className="register__container">
            <div className="register__top">
                <NavLink to="/">
                    <img 
                        className="header__logo main__link"
                        alt="логотип"
                        src={logo}
                    />
                </NavLink>
                <h2 className="register__header">Добро пожаловать!</h2>
            </div>
            <div className="register__form">
                <div className="register__form_name">
                    <p className="register__form_label">Имя</p>
                    <input 
                    type="text" 
                    className="register__form_input"
                    defaultValue="Виталий">
                    </input>
                </div>
                <div className="register__form_email">
                    <p className="register__form_label">E-mail</p>
                    <input 
                    type="email" 
                    className="register__form_input"
                    defaultValue="pochta@yandex.ru">
                    </input>
                </div>
                <div className="register__form_pass">
                    <p className="register__form_label">Пароль</p>
                    <input 
                    type="password" 
                    className="register__form_input">
                    </input>
                    <Link to="/movies" className="register__link">
                        <button type="button" className="register__button main__link">Зарегистрироваться</button>
                    </Link>
                    <div className="register__redirection">
                        <p className="register__redirection_label">Уже зарегистрированы?</p>
                            <Link to="/login" className="register__redirection_link main__link">
                                Войти
                            </Link>                        
                    </div>
                </div>
            </div>
            </div>

        </section>
    )
}

export default Register;