import React, {useContext} from "react";

import styles from "./Experience.module.css";
import {getImageUrl} from "../../utils";
import {translations} from "../../data/translations.js";
import {LanguageContext} from "../../LanguageContext.jsx";

export const Experience = () => {
    const {language} = useContext(LanguageContext); // Utilisation du contexte

    const t = translations[language].experiences; // Obtenir les traductions du menu selon la langue

    return (
        <section className={styles.container} id="experience">
            <h2 className={styles.title}>{t.title}</h2>
            <div className={styles.content}>
                <ul className={styles.history}>
                    <li className={styles.historyItem}>
                        <img
                            src={getImageUrl("history/thales.png")}
                            alt={`${t.company1} Logo`}
                        />
                        <div className={styles.historyItemDetails}>
                            <h2>{t.company1}</h2>
                            <p>{t.dates1}</p>
                            <ul>
                                {t.description1}
                            </ul>
                        </div>
                    </li>
                    <li className={styles.historyItem}>
                        <img
                            src={getImageUrl("history/coreoz.png")}
                            alt={`${t.company2} Logo`}
                        />
                        <div className={styles.historyItemDetails}>
                            <h2>{t.company2}</h2>
                            <p>{t.dates2}</p>
                            <ul>
                                {t.description2}
                            </ul>
                        </div>
                    </li>
                    <li className={styles.historyItem}>
                        <img
                            src={getImageUrl("history/solutec.png")}
                            alt={`${t.company3} Logo`}
                        />
                        <div className={styles.historyItemDetails}>
                            <h2>{t.company3}</h2>
                            <p>{t.dates3}</p>
                            <ul>
                                {t.description3}
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};