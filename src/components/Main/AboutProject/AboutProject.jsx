function AboutProject () {
    return (
        <section className="aboutProject" id="aboutProject">
            <h2 className="main__header">
                О проекте
            </h2>
            <div className="aboutProject__text">
                <div className="aboutProject__stage">
                    <h3 className="aboutProject__title">
                        Дипломный проект включал 5 этапов
                    </h3>
                    <p className="aboutProject__subtitle">
                        Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
                    </p>
                </div>
                <div className="aboutProject__time">
                    <h3 className="aboutProject__title">
                        На выполнение диплома ушло 5 недель
                    </h3>
                    <p className="aboutProject__subtitle">
                        У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
                    </p>
                </div>
            </div>
            <div className="aboutProject__graph">
                <div className="aboutProject__back">
                    <p className="aboutProject__back-box">1 неделя</p>
                    <p className="aboutProject__label">Back-end</p>
                </div>
                <div className="aboutProject__front">
                <p className="aboutProject__front-box">4 недели</p>
                <p className="aboutProject__label">Front-end</p>
                </div>
            </div>
        </section>
    )
}

export default AboutProject; 