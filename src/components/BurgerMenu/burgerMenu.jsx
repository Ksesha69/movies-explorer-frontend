import React from "react";
import { Link, NavLink } from "react-router-dom";
import closeBtn from '../../images/closeBtn.svg';
import auth from '../../images/auth.svg'; 

function BurgerMenu({ isOpen, onClose }) {
    return (
        <div className={`burgerMenu ${isOpen && "burgerMenu-opened"}`}>
            <div className="burgerMenu__container">
                <button className="burgerMenu__close" onClick={onClose}>
                    <img className="burgerMenu__close-img" src={closeBtn} alt="закрыть" />
                </button>
                <div className="burgerMenu__main">
                    <NavLink
                    to="/"
                    className="burgerMenu__link">
                        Главная
                    </NavLink>
                    <NavLink
                    to="/movies"
                    className="burgerMenu__link">
                        Фильмы
                    </NavLink>
                    <NavLink
                    to="/saved-movies"
                    className="burgerMenu__link">
                        Сохранённые фильмы
                    </NavLink>
                </div>
                <Link to="/profile" className="burgerMenu__btn link">
                    <p>Аккаунт</p>
                    <img className="burgerMenu__profile-btn" src={auth} alt="кнопка" />
                </Link>
            </div>
        </div>
    );
}

export default BurgerMenu;