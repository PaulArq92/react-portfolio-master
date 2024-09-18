import React, {useContext} from "react";

import styles from "./Footer.module.css";
import {getImageUrl} from "../../utils";
import {LanguageContext} from "../../LanguageContext.jsx";
import {translations} from "../../data/translations.js";

export const Footer = () => {
    const {language} = useContext(LanguageContext);

    const t = translations[language].footer;
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.collumnFooter}>
                <ul className={styles.links}>
                    <li className={styles.link}>
                        <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon"/>
                        <a href="mailto:p.arquier7@gmail.com">{t.email}</a>
                    </li>
                    <li className={styles.link}>
                        <img
                            src={getImageUrl("contact/linkedinIcon.png")}
                            alt="LinkedIn icon"
                        />
                        <a href="https://www.linkedin.com/in/paul-arquier-283957195/">{t.linkedin}</a>
                    </li>
                    <li className={styles.link}>
                        <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon"/>
                        <a href="https://github.com/PauloLaPopo?tab=repositories">{t.github}</a>
                    </li>
                </ul>
                <ul className={styles.location}>
                    {t.location}
                </ul>
                <ul className={styles.copyright}>
                    {t.copyright}
                </ul>
            </div>
        </footer>
    );
};