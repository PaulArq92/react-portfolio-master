import React, { useContext } from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import { LanguageContext } from "../../LanguageContext.jsx";
import { translations } from "../../data/translations.js";

export const About = () => {
    const { language } = useContext(LanguageContext); // Utilisation du contexte

    const t = translations[language].about; // Obtenir les traductions du menu selon la langue

    return (
        <section className={styles.container} id="about">
            <h2 className={styles.titlePage}>Qui je suis ?</h2>
            <div className={styles.content}>
                <div className={styles.introduction}>{t.introduction}</div>

                <div className={styles.aboutItems}>
                    <div className={styles.aboutItem}>
                        <img src={getImageUrl("about/crayon-de-couleur.png")} alt="UX & UI" className={styles.icon} />
                        <h2 className={styles.title}>{t.uxTitle}</h2>
                        <p className={styles.description}>{t.uxDescription}</p>
                    </div>
                    <div className={styles.aboutItem}>
                        <img src={getImageUrl("about/developpeur-full-stack.png")} alt="Fullstack Developer" className={styles.icon} />
                        <h2 className={styles.title}>{t.fullstackTitle}</h2>
                        <p className={styles.description}>{t.fullstackDescription}</p>
                    </div>
                    <div className={styles.aboutItem}>
                        <img src={getImageUrl("about/base-de-donnees.png")} alt="Data Analyst" className={styles.icon} />
                        <h2 className={styles.title}>{t.dataTitle}</h2>
                        <p className={styles.description}>{t.dataDescription}</p>
                    </div>
                    <div className={styles.aboutItem}>
                        <img src={getImageUrl("about/consultation.png")} alt="Tech Consultant" className={styles.icon} />
                        <h2 className={styles.title}>{t.consultantTitle}</h2>
                        <p className={styles.description}>{t.consultantDescription}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
