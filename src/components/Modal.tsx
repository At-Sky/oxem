import React, {useEffect, useState} from 'react';
import styles from '@/styles/Modal.module.scss'

interface IModal {
    isClicked: Boolean;
    handleClick: Function;
    handleCallbackClick: Function;
}

function Modal({isClicked, handleClick, handleCallbackClick}: IModal): JSX.Element {
    const [clicked, setClicked] = useState<Boolean>(false);

    useEffect(() => {
        setClicked(isClicked)
    }, [isClicked])

    let toggleVisibility = () => {
        setClicked(!clicked)
        handleClick(!clicked)
    }

    return (
        <>
            <div
                className={clicked ? styles.overlay : styles.overlay + ' ' +styles.hidden}
                onClick={toggleVisibility}>
            </div>
            <div className={clicked ? styles.modal : styles.modal + ' ' + styles.hidden}>
                <div className={styles.close} onClick={toggleVisibility}>
                    <span className={styles.line}></span>
                    <span className={styles.line}></span>
                </div>
                <ul className={styles.menu}>
                    <li className={styles.menu__item}>
                        <a className={styles.menu__link}>Лизинг</a>
                        <div className={styles.dropdown_container}>
                            <div className={styles.dropdown}>
                                <a className={styles.dropdown__item}>Для личного пользования</a>
                                <a className={styles.dropdown__item}>Для юридических лиц</a>
                                <a className={styles.dropdown__item}>Калькулятор</a>
                            </div>
                        </div>
                    </li>
                    <li className={styles.menu__item}>
                        <a className={styles.menu__link}>Каталог</a>
                    </li>
                    <li className={styles.menu__item}>
                        <a className={styles.menu__link}>О нас</a>
                    </li>
                    <li className={styles.menu__item}>
                        <button className={styles.menu__button} onClick={() => handleCallbackClick(true)}>Оставить заявку</button>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Modal;