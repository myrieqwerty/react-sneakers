import { useState } from 'react';
import styles from './Card.module.scss';

function Card({imgUrl, title, price, onFavorite, onPlus}) {
    const [isAdded, setIsAdded] = useState(false)

    const handleOnClickPlus = () => {
        onPlus()
        setIsAdded(!isAdded)
        
    }

    return (
        <div className={styles.card}>
            <div className="favorite">
                <img src="img/unliked.svg" alt=";Unliked" />
            </div>
            <img width={133} height={112} src={imgUrl} alt="Sneakers"></img>
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column ">
                <span>Цена:</span>
                <b>{price} руб.</b>
                </div>
                <img className={styles.plus} onClick={() => handleOnClickPlus()} src={isAdded  ? "/img/btn-checked.svg" : "/img/add.svg"}  alt=""/>
            </div>
        </div>)
}

export default Card