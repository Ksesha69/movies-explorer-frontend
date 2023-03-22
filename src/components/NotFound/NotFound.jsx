import { Link } from "react-router-dom";

function NotFound(){
    return(
        <section className="notFound">
            <h1 className="notFound__header">404</h1>
            <p className="notFound__text">Страница не найдена</p>
            <Link to="/signup" className="notFound__link">Назад</Link>
        </section>
    )
}

export default NotFound;