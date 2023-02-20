import React, {useEffect, useState} from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "@/styles/CallbackForm.module.scss";
import whatsapp from "../../public/whatsapp.svg";
import telegram from "../../public/telegram.svg";
import Image from "next/image";

interface IForm {
    isClicked: Boolean;
    handleCallbackClick: Function;
}

type Inputs = {
    phone: string,
    name: string,
}
function CallbackForm({isClicked, handleCallbackClick: handleClick}: IForm): JSX.Element {
    const [clicked, setClicked] = useState<Boolean>(false);

    const handleChangeInput = (e: any) => {
        if (e.target) {
            console.log(e.target)
        }
    }

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
        getValues
    } = useForm<Inputs>({
        mode: "onBlur"
    })

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(JSON.stringify(data))
    }

    useEffect(() => {
        setClicked(isClicked)
    }, [isClicked])

    let toggleVisibility = () => {
        setClicked(!clicked)
        handleClick(!clicked)
    }
    return (
        <div>
            <div
                className={clicked ? styles.overlay : styles.overlay + ' ' +styles.hidden}
                onClick={toggleVisibility}>
            </div>
            <div className={clicked ? styles.modal : styles.modal + ' ' + styles.hidden}>
                <div className={styles.modal__close_container}>
                    <div className={styles.modal__close} onClick={toggleVisibility}>
                        <span className={styles.line}></span>
                        <span className={styles.line}></span>
                    </div>
                </div>
                <h2 className={styles.modal__title}>Онлайн-заявка</h2>
                <p className={styles.modal__description}>Заполните форму, и мы вскоре свяжемся с вами, чтобы ответить на все вопросы</p>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.form__inputGroup}>
                        <input type="text" id="phone" placeholder={'+7 (921) 123-45-67'} className={styles.form__input}
                               {...register("phone", {
                                   required: "Введите телефон",
                                   pattern: {
                                       value: /(\+7|8)[\s(]*\d{3}[)\s]*\d{3}[\s-]?\d{2}[\s-]?\d{2}/g,
                                       message: "Неправильно введен номер",
                                   },
                               })}
                        />
                        <label htmlFor="phone">Телефон *</label>
                        <div className={styles.error}>{errors?.phone && <p>{errors?.phone?.message || 'Error!'}</p> }</div>
                    </div>
                    <div className={styles.form__inputGroup}>
                        <input type="text" id="name" placeholder={' '} className={styles.form__input}
                               {...register("name", {
                                   required: false,
                                   minLength: {
                                       value: 3,
                                       message: "Минимум 3 буквы",
                                   },
                                   pattern: {
                                       value: /^[а-яА-ЯёЁa-zA-Z]/,
                                       message: "Имя введено неправильно",
                                   },
                               })}
                        />
                        <label htmlFor="name">Имя</label>
                        <div className={styles.error}>{errors?.name && <p>{errors?.name?.message || 'Error!'}</p> }</div>
                    </div>
                    <div className={styles.form__submit_container}>
                        <p className={styles.form__rules}>Нажимая на кнопку «Оставить заявку»,  я даю согласие <strong>на обработку персональных данных</strong></p>
                        <button className={styles.form__button}>Оставить заявку</button>
                    </div>
                </form>
                <div className={styles.modal__icons_container}>
                    <div className={styles.modal__icon}>
                        <Image src={whatsapp} alt={whatsapp}/>
                    </div>
                    <div className={styles.modal__icon}>
                        <Image src={telegram} alt={telegram}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CallbackForm;