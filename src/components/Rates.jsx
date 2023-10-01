import style from './rates.module.scss'

export default function Rates({ name, price, speed, terms, color, priceColor, isSelected }) {

    const a = isSelected ? style.selected : style.card;

    return (
        <div className={a}>
            <h3 className={style[color]}>{name}</h3>
            <h1 className={style[priceColor]}><sup>руб </sup> {price} <sub> /мес</sub></h1>
            <p className={style.cardSpeed}>{speed}</p>
            <p className={style.cardTerms}>{terms}</p>
        </div >
    )
}
