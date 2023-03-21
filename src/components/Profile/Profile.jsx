function Profile () {
    return (
        <section className="profile">
            <h2 className="profile__header">Привет, Виталий!</h2>
            <div className="profile__form">
                <div className="profile__container">
                    <p className="profile__label">Имя</p>
                    <input
                    className="profile__input"
                    type="text"
                    id="profile-name"
                    name="profile-name"
                    placeholder=" "
                    defaultValue="Виталий"
                    minLength="2"
                    maxLength="40"
                    required
                    />
                </div>
                <div className="profile__container">
                    <p className="profile__label">E-mail</p>
                    <input
                    className="profile__input"
                    type="text"
                    id="profile-name"
                    name="profile-name"
                    placeholder=" "
                    defaultValue="pochta@yandex.ru"
                    minLength="2"
                    maxLength="40"
                    required
                    />
                </div>
                <button type="submit" className="profile__form-submit main__link">Редактировать</button>
            </div>
            <button type="button" className="profile__logout main__link">Выйти из аккаунта</button>
        </section>
    )
}

export default Profile;