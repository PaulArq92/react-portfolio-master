import React, {useContext} from "react";

import styles from "./Academic.module.css";

import { getImageUrl } from "../../utils";
import {LanguageContext} from "../../LanguageContext.jsx";
import {translations} from "../../data/translations.js";

export const Academic = () => {
    const { language } = useContext(LanguageContext);
    const t = translations[language].academic; // Obtenir les traductions du menu selon la langue

    return (
        <section className={styles.academicJourney} id="academic">
            <h2 className={styles.title}>{t.title}</h2>

            <div className={styles.school}>
                <h3 className={styles.schoolName}>{t.school1}</h3>
                <span className={styles.dates}>{t.dates1}</span>
                <ul className={styles.details}>
                    <li>{t.description1}</li>
                </ul>
            </div>

            <div className={styles.school}>
                <h3 className={styles.schoolName}>{t.school2}</h3>
                <span className={styles.dates}>{t.dates2}</span>
                <ul className={styles.details}>
                    <li>{t.description2}</li>
                </ul>
            </div>

            <div className={styles.school}>
                <h3 className={styles.schoolName}>{t.school3}</h3>
                <span className={styles.dates}>{t.dates3}</span>
                <ul className={styles.details}>
                    <li>{t.descriptions3}</li>
                </ul>
            </div>

            <div className={styles.school}>
                <h3 className={styles.schoolName}>{t.school4}</h3>
                <span className={styles.dates}>{t.dates4}</span>
                <ul className={styles.details}>
                    <li>{t.description4}</li>
                </ul>
            </div>

            <div className={styles.additionalEducation}>
                <h3 className={styles.schoolName}>{t.certificationTitle}</h3>
                <ul className={styles.details}>
                    <li>{t.certificationsList}</li>
                </ul>
            </div>
        </section>
    );
};