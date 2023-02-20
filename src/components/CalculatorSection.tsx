import React, {useEffect, useRef} from 'react';
import styles from '@/styles/CalculatorSection.module.scss'
import Slider from '@mui/material/Slider';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import getBoundingClientRect from "@popperjs/core/lib/dom-utils/getBoundingClientRect";

declare module '@mui/material/styles' {
    interface Theme {
        status: {
            danger: React.CSSProperties['color'];
        };
    }

    interface Palette {
        neutral: Palette['primary'];
    }

    interface PaletteOptions {
        neutral: PaletteOptions['primary'];
    }

    interface PaletteColor {
        darker?: string;
    }

    interface SimplePaletteColorOptions {
        darker?: string;
    }

    interface ThemeOptions {
        status: {
            danger: React.CSSProperties['color'];
        };
    }
}

const theme = createTheme({
    status: {
        danger: '#e53e3e',
    },
    palette: {
        primary: {
            main: '#FF9514',
            darker: '#FF9514',
        },
        neutral: {
            main: '#64748B',
            contrastText: '#fff',
        },
    },
});

interface ICalculator {
    handleCallbackClick: Function;
}

function valuetext(value: number) {
    return `${value}`;
}
function CalculatorSection({handleCallbackClick}: ICalculator): JSX.Element {
    const cost = useRef(null)
    const firstpay = useRef(null)
    const period = useRef(null)
    //на управляемых инпутах с прогресс барами уже совсем что-то не то пошло
    let handleClick = (event:  React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        handleCallbackClick(true);
    }

    return (
        <section className={styles.calculatorSection}>
            <ThemeProvider theme={theme}>
            <h1 className={styles.calculatorSection__title}>Рассчитайте стоимость автомобиля в лизинг</h1>
            <form className={styles.calculator}>
                <div className={styles.calculator__inputGroup}>
                    <label htmlFor="cost">Стоимость автомобиля</label>
                    <input type="text" name="cost" id="cost" placeholder={'3 300 300'} className={styles.calculator__input}/>
                    <div className={styles.calculator__progress}></div>
                    <p>₽</p>
                    <Slider
                        defaultValue={30}
                        color="primary"
                        className={styles.calculator__mark}
                        ref={cost}
                    />
                </div>
                <div className={styles.calculator__inputGroup}>
                    <label htmlFor="firstpay">Первоначальный взнос</label>
                    <input type="text" name="firstpay" id="firstpay" placeholder={'420 000'} className={styles.calculator__input}/>
                    <p className={styles.styled_label}>10%</p>
                    <Slider
                        defaultValue={30}
                        color="primary"
                        className={styles.calculator__mark}
                        ref={firstpay}
                    />
                </div>
                <div className={styles.calculator__inputGroup}>
                    <label htmlFor="period">Срок лизинга</label>
                    <input type="text" name="period" id="period" placeholder={'60'} className={styles.calculator__input}/>
                    <p>мес.</p>
                    <Slider
                        defaultValue={30}
                        color="primary"
                        className={styles.calculator__mark}
                        ref={period}
                    />
                </div>
                <div className={styles.calculator__inputGroup}>
                    <label htmlFor="period">Сумма договора лизинга</label>
                    <input type="text" name="period" id="period" placeholder={'4 467 313 ₽'} className={styles.calculator__input_result}/>
                </div>
                <div className={styles.calculator__inputGroup}>
                    <label htmlFor="period">Ежемесячный платеж</label>
                    <input type="text" name="period" id="period" placeholder={'114 455 ₽'} className={styles.calculator__input_result}/>
                </div>
                <button className={styles.calculator__button} onClick={(event) => handleClick(event)}>Оставить заявку</button>
            </form>
            </ThemeProvider>
        </section>
    );
}

export default CalculatorSection;