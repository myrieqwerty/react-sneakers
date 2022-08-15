import styles from './Drawer.module.scss'

function Drawer({onCloseCart, items}) {
    return (
        <div className={styles.overlay}>
            <div className={styles.drawer}>
                
                <h2 className="mb-30 d-flex justify-between">Корзина 
                <img 
                    className="cu-p" 
                    src="/img/btn-remove.svg"
                    alt="Close"
                    onClick={onCloseCart}
                />
                </h2>
                
                <div className={styles.items}>
                    {items ? items.map(item => {
                        return (
                            <div className={styles.cartItem}>
                                <img src={item.imgUrl} className={styles.cartItemImg} alt={item.title}/>
                                <div className="mr-20 flex">
                                    <p className="mb-5">{item['title']}</p>
                                    <b>{item.price} руб.</b>
                                </div>
                                <img 
                                className={styles.removeBtn} 
                                src="/img/btn-remove.svg"
                                alt="remove"
                                />
                            </div>
                        )
                    })
                        
                    : null }
                    
                
                </div>
                
                <div className={styles.cartTotalBlock}>
                <ul>
                    <li>
                    <span>Итого</span>
                    <div></div>
                    <b>21 498 руб.</b>
                    </li>
                    <li>
                    <span>Налог 5%</span>
                    <div></div>
                    <b>1047 руб.</b>
                    </li>
                </ul>
                <button className={styles.greenButton}>Оформить заказ <img src="/img/arrow.svg" alt="arrow"/></button>
                </div>
            
            </div>
        </div>

       
    )
}

export default Drawer