import React, {useContext, useState} from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import {translations} from "../../data/translations.js";
import {LanguageContext} from "../../LanguageContext.jsx";

export const Navbar = () => {
    const { language, toggleLanguage } = useContext(LanguageContext);
    const [menuOpen, setMenuOpen] = useState(false);

    const t = translations[language].navbar;

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="mailto:p.arquier7@gmail.com">
                {t.email}
            </a>
            <div className={styles.menu}>
                <img
                    className={styles.menuBtn}
                    src={
                        menuOpen
                            ? getImageUrl("nav/closeIcon.png")
                            : getImageUrl("nav/menuIcon.png")
                    }
                    alt="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                <ul
                    className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                    onClick={() => setMenuOpen(false)}
                >
                    <li>
                        <a href="https://www.linkedin.com/in/paul-arquier-283957195/" target="_blank">{t.linkedin}</a>
                    </li>
                    <li>
                        <a href="https://github.com/PauloLaPopo?tab=repositories" target="_blank">{t.github}</a>
                    </li>
                    <li>
                        <a onClick={toggleLanguage} className={styles.languageToggle}>
                            {t.toggleLang}
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};