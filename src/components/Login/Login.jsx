import { NavLink, Link } from "react-router-dom";
import useFormWithValidation from "../useForm/useForm";
import logo from '../../images/logo.svg'

function Login ({ onSubmit }) {

    const { values, handleChange, errors, isValid } = useFormWithValidation();

    const buttonSubmit = (
        `link login__button ${!isValid && 'login__button_disabled'}`);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const { email, password } = values;
        onSubmit({email, password});
    };

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
                <form onSubmit={handleSubmit} className="login__form">
                    <div className="login__form-email">
                        <p className="login__form-label">E-mail</p>
                        <input 
                        required
                        type="email" 
                        id="login-input-email"
                        className="login__form-input"
                        name="email"
                        placeholder="Email"
                        value={values.email || ''}
                        onChange={handleChange}
                        >
                        </input>
                        <span id="login-input-email-error" className="login__input-error">{errors.email}</span>
                    </div>
                    <div className="login__form-pass">
                        <p className="login__form-label">Пароль</p>
                        <input 
                        required
                        type="password" 
                        id="login-input-pass"
                        className="login__form-input"
                        name="password"
                        placeholder="Пароль"
                        value={values.password || ''}
                        onChange={handleChange}
                        >
                        </input>
                        <button type="submit" className={buttonSubmit}>Войти</button>
                        <div className="login__redirection">
                            <p className="login__redirection-label">Ещё не зарегистрированы?</p>
                            <Link to="/signup" className="login__redirection-link link">Регистрация</Link>
                        </div>
                    </div>
                </form>
            </div>

        </section>
    )
}

export default Login;