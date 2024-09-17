import React from 'react';
import styles from './SkillsCarousel.module.css';
import skills from "../../data/skills.json";
import { getImageUrl } from '../../utils';

export const SkillsCarousel = () => {
    return (
        <section className={styles.carousel}>
            <div className={styles.carouselInner}>
                <div className={styles.skills}>
                    {skills.map((skill, id) => (
                        <div key={id} className={styles.skill}>
                            <div className={styles.skillImageContainer}>
                                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                            </div>
                            <p>{skill.title}</p>
                        </div>
                    ))}
                </div>
                <div className={styles.skills}>
                    {skills.map((skill, id) => (
                        <div key={id + skills.length} className={styles.skill}>
                            <div className={styles.skillImageContainer}>
                                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                            </div>
                            <p>{skill.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
