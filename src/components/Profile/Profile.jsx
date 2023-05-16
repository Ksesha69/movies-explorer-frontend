import React, { useState, useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile ({handleUpdateUser, handleLogout}) {

    const currentUser = useContext(CurrentUserContext);

    const [name, setName] = useState(currentUser.name);
    const [email, setEmail] = useState(currentUser.email);

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        handleUpdateUser({
            name: name,
            email: email,
        });
    } 

    return (
        <section className="profile">
            <h2 className="profile__header">{`Привет, ${currentUser.name}!`}</h2>
            <div className="profile__form">
                <div className="profile__container">
                    <p className="profile__label">Имя</p>
                    <input
                    className="profile__input"
                    type="text"
                    id="profile-name"
                    name="profile-name"
                    placeholder=""
                    value={name || ""}
                    onChange={handleChangeName}
                    minLength="2"
                    maxLength="40"
                    required=""
                    />
                </div>
                <div className="profile__container">
                    <p className="profile__label">E-mail</p>
                    <input
                    className="profile__input"
                    type="text"
                    id="profile-name"
                    name="profile-name"
                    placeholder=""
                    value={email || ""}
                    onChange={handleChangeEmail}
                    minLength="2"
                    maxLength="40"
                    required=""
                    />
                </div>
                <button type="button" onClick={handleSubmit} className="profile__form-submit link">Редактировать</button>
            </div>
            <button type="button" onClick={handleLogout} className="profile__logout link">Выйти из аккаунта</button>
        </section>
    )
}

export default Profile;