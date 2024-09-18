import React, { useContext } from 'react';
import styles from './Others.module.css';
import othersData from "../../data/others.json";
import { LanguageContext } from "../../LanguageContext.jsx";
import {translations} from "../../data/translations.js";

export const Others = () => {
    const { language } = useContext(LanguageContext); // Utilisation du contexte

    const t = translations[language].others;
    const data = othersData[language];

    return (
        <section className={styles.container}>
            <div className={styles.languagesSection}>
                <h3 className={styles.title}>{t.titleLanguages}</h3>
                <ul className={styles.languageList}>
                    {data.languages.map((language, index) => (
                        <li key={index} className={styles.languageItem}>
                            <span className={styles.languageName}>{language.name}</span> -
                            <span className={styles.languageLevel}> {language.level}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className={styles.hobbiesSection}>
                <h3 className={styles.title}>{t.titleHobbies}</h3>
                <ul className={styles.hobbiesList}>
                    {data.hobbies.map((hobby, index) => (
                        <li key={index} className={styles.hobbyItem}>
                            <span className={styles.hobbyName}>{hobby.name}</span> -
                            <span className={styles.hobbyExample}> {hobby.example}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className={styles.hobbiesSection}>
                <h3 className={styles.title}>{t.titleFormations}</h3>
                <ul className={styles.hobbiesList}>
                    {data.formations.map((formation, index) => (
                        <li key={index} className={styles.hobbyItem}>
                            <span className={styles.hobbyName}>{formation.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};
