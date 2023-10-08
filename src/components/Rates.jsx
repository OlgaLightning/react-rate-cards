import style from './rates.module.scss';

export default function Rates({ name, price, speed, terms, color, priceColor, activeCard, item, setId }) {

    const cl = activeCard ? style.selected : style.card;


    function handleActive() {
        setId(item.id);
    }

    return (
        <div className={`${cl}`} onClick={handleActive} >
            <h3 className={style[color]}>{name}</h3>
            <div className={style[priceColor]}>
                <span className={style.currency}>руб</span>
                <span className={style.priceValue}>{price}</span>
                <span className={style.period}>/мес</span>
            </div>
            <p className={style.cardSpeed}>{speed}</p>
            <p className={style.cardTerms}>{terms}</p>
        </div>
    )
}
