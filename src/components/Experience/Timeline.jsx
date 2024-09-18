import React, { useContext } from "react";
import styles from "./Timeline.module.css";
import { getImageUrl } from "../../utils";
import { LanguageContext } from "../../LanguageContext.jsx";
import timelineData from "../../data/timelineData.json";
import { translations } from "../../data/translations.js";

export const Timeline = () => {
    const { language } = useContext(LanguageContext);
    const data = timelineData[language];
    const t = translations[language].timeline;

    return (
        <>
            <h2 className={styles.title}>{t.title}</h2>
            <div className={styles.timelineContainer}>
                <div className={styles.timeline}></div>
                <div className={styles.timelineItems}>
                    {data.map((item, index) => (
                        <div key={index} className={styles.timelineItem}>
                            <div
                                className={`${styles.timelineContent} ${index % 2 === 0 ? styles.left : styles.right}`}
                            >
                                <img
                                    src={getImageUrl(item.logoSrc)}
                                    alt={item.title}
                                    className={styles.timelineLogo}
                                />
                                <div className={styles.timelineDetails}>
                                    <h3 className={styles.timelineTitle}>{item.title}</h3>
                                    <p className={styles.timelineDate}>{item.date}</p>
                                    <p className={styles.timelineDescription}>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
