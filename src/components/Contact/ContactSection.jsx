import React, {useContext} from 'react';
import styles from './ContactSection.module.css';
import {LanguageContext} from "../../LanguageContext.jsx";
import {translations} from "../../data/translations.js";

export const ContactSection = () => {
    const {language} = useContext(LanguageContext);

    const t = translations[language].contactSection;

    return (
        <section className={styles.container}>
            <div className={styles.verticalLine}></div>
            <div className={styles.content}>
                <h2 className={styles.title}>{t.title}</h2>
                <a href="mailto:p.arquier7@gmail.com" target="_blank" className={styles.contactButton}>
                    {t.buttonLabel}
                </a>
            </div>
        </section>
    );
};
