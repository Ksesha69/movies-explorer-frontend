import promo from '../../../images/promo.svg';
import NavTab from '../NavTab/NavTab';
function Promo () {
    return (
        <section className="promo">
            <div className='promo__main'>
                <div className="promo__text">
                    <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
                    <p className='promo__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                </div>
                <div className="promo__image">
                    <img 
                    className="promo__image" 
                    src={promo} 
                    alt="земной шар"
                    />
                </div>
            </div>
            <NavTab />
        </section>
    )
}

export default Promo; 