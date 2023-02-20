import React from 'react';
import Logo from "@/components/Logo";
import styles from "@/styles/Header.module.scss"

interface IHeader {
    handleClick: Function;
    handleCallbackClick: Function;
}
function Header({handleClick, handleCallbackClick}: IHeader): JSX.Element {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Logo className={styles.logo__img}/>
                <span className={styles.logo__divider}></span>
                <p className={styles.logo__text}>Лизинговая компания</p>
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
            <div className={styles.header__burger} onClick={() => handleClick(true)}>
                <span className={styles.line}></span>
                <span className={styles.line}></span>
                <span className={styles.line}></span>
            </div>
        </header>
    );
}

export default Header;