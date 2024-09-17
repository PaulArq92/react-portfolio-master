import React from 'react';
import styles from './LanguagesAndHobbies.module.css';

export const LanguagesAndHobbies = () => {
    const languages = [
        { name: 'Français', level: 'Langue maternelle' },
        { name: 'Anglais', level: 'Courant (C1)' },
        { name: 'Espagnol', level: 'Intermédiaire (B2)' },
        { name: 'Polonais', level: 'Débutant (A1)' },
    ];

    const hobbies = [
        'Voyages',
        'Développement web',
        'Photographie',
        'Jeux vidéo',
        'Lecture'
    ];

    return (
        <section className={styles.container}>
            <div className={styles.languagesSection}>
                <h3 className={styles.title}>Langues</h3>
                <ul className={styles.languageList}>
                    {languages.map((language, index) => (
                        <li key={index} className={styles.languageItem}>
                            <span className={styles.languageName}>{language.name}</span> -
                            <span className={styles.languageLevel}> {language.level}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className={styles.hobbiesSection}>
                <h3 className={styles.title}>Hobbies</h3>
                <ul className={styles.hobbiesList}>
                    {hobbies.map((hobby, index) => (
                        <li key={index} className={styles.hobbyItem}>{hobby}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
};
