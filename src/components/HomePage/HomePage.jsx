import React, { useContext } from "react";

import styles from "./HomePage.module.css";
import { getImageUrl } from "../../utils";
import { translations } from "../../data/translations.js";
import { LanguageContext } from "../../LanguageContext.jsx";

export const HomePage = () => {
    const { language } = useContext(LanguageContext);
    const t = translations[language].homePage; // Obtenir les traductions du menu selon la langue

    const cvLink = language === "fr"
        ? "/assets/resume/CV_Paul_Arquier_FR.pdf"
        : "/assets/resume/Resume_Paul_Arquier_EN.pdf";

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <img
                    src={getImageUrl("hero/portrait.png")}
                    alt="HomePage image of me"
                    className={styles.heroImg}
                />
                <h1 className={styles.title}>{t.welcome}</h1>
                <p className={styles.description}>
                    {t.introduction}
                </p>
                <a
                    href={cvLink}
                    target="_blank"
                    rel="noopener noreferrer"  // Ajoute la sécurité pour les nouveaux onglets
                    className={styles.downloadBtn}>
                    {t.download}
                </a>
            </div>
        </section>
    );
};