import { useTranslation } from "react-i18next";
import styles from "./about.module.css";

const About = () => {
    const { t } = useTranslation("about");

    return (
        <section id="about" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.media}>
                    <div className={styles.imageWrap}>
                        <img
                            src="anna_skel.jpg"
                            alt={t("imageAlt")}
                            className={styles.image}
                            referrerPolicy="no-referrer"
                        />
                    </div>

                    <div className={styles.quoteCard}>
                        <p className={styles.quoteText}>{t("quote")}</p>
                    </div>
                </div>

                <div className={styles.content}>
                    <h2 className={styles.title}>{t("title")}</h2>

                    <div className={styles.textBlock}>
                        <p>{t("text.first")}</p>
                        <p>{t("text.second")}</p>
                    </div>

                    <div className={styles.stats}>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>
                                {t("stats.experience.value")}
                            </span>
                            <span className={styles.statLabel}>
                                {t("stats.experience.label")}
                            </span>
                        </div>

                        <div className={styles.statItem}>
                            <span className={styles.statValue}>
                                {t("stats.practiceHours.value")}
                            </span>
                            <span className={styles.statLabel}>
                                {t("stats.practiceHours.label")}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;