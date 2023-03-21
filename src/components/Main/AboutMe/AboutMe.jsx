import student from '../../../images/student.svg';
import Portfolio from '../Portfolio/Portfolio';

function AboutMe () {
    return (
        <section className="aboutMe" id="aboutMe">
            <h2 className="main__header">
                Студент
            </h2>
            <div className='aboutMe__info'>
                <div className="aboutMe__text">
                    <h3 className="aboutMe__text-title">Виталий</h3>
                    <p className="aboutMe__text-subtitle">Фронтенд-разработчик, 30 лет</p>
                    <p className="aboutMe__text-description">
                        Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. 
                        Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. 
                        С 2015 года работал в компании «СКБ Контур». 
                        После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
                    </p>
                    <a className='aboutMe__link main__link' href='https://github.com/Ksesha69' target='blank'>Github</a>
                </div>
                <img 
                className="aboutMe__image" 
                alt="фото студента"
                src={student}
                />
            </div>
            <Portfolio />
        </section>
    )
}

export default AboutMe;