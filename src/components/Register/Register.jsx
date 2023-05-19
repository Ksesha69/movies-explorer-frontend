import { NavLink, Link } from "react-router-dom";
import useFormWithValidation from "../useForm/useForm";
import logo from '../../images/logo.svg'

function Register ({ onSubmit }) {

    const { values, handleChange, errors, isValid } = useFormWithValidation();

    const buttonSubmit = (
        `link register__button ${!isValid && 'register__button_disabled'}`);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const { name, email, password } = values;
        onSubmit({name, email, password});
    };

    return (
        <section className="register">
            <div className="register__container">
                <div className="register__top">
                    <NavLink to="/">
                        <img 
                        className="link"
                        alt="логотип"
                        src={logo}
                        />
                    </NavLink>
                    <h2 className="register__header">Добро пожаловать!</h2>
                </div>
                <form onSubmit={handleSubmit} className="register__form">
                    <div className="register__field">
                        <p className="register__form-label">Имя</p>
                        <input 
                        required
                        type="text" 
                        id="register-input-name"
                        className="register__form-input"
                        name="name"
                        placeholder="Имя"
                        value={values.name || ''}
                        onChange={handleChange}>
                        </input>
                        <span id="register-input-name-error" className="register__input-error">{errors.name}</span>
                    </div>
                    <div className="register__field">
                        <p className="register__form-label">E-mail</p>
                        <input 
                        required
                        type="email"
                        id="register-input-email" 
                        className="register__form-input"
                        name="email"
                        placeholder="Email"
                        autoComplete="off"
                        value={values.email || ''}
                        onChange={handleChange}
                        >
                        </input>
                        <span id="register-input-email-error" className="register__input-error">{errors.email}</span>
                    </div>
                    <div className="register__field">
                        <p className="register__form-label">Пароль</p>
                        <input 
                        required
                        type="password" 
                        id="register-input-pass"
                        className="register__form-input"
                        name="password"
                        placeholder="Пароль"
                        value={values.password || ''}
                        onChange={handleChange}
                        >
                        </input>
                        <span id="register-input-pass-error" className="register__input-error">{errors.password}</span>
                            <button type="submit" className={buttonSubmit}>Зарегистрироваться</button>
                        <div className="register__redirection">
                            <p className="register__redirection-label">Уже зарегистрированы?</p>
                            <Link to="/login" className="register__redirection-link link">
                                Войти
                            </Link>                        
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Register;