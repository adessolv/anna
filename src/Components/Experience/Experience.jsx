import { useTranslation } from "react-i18next";
import styles from "./Experience.module.css";

const Experience = () => {
    const { t } = useTranslation("experience");

    return (
        <section id="experience" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.title}>{t("title")}</h2>

                    <div className={styles.textBlock}>
                        <p>
                            {t("text.first.before")}{" "}
                            <a
                                href="https://www.institutofeldenkrais.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.link}
                            >
                                Instituto Feldenkrais
                            </a>{" "}
                            {t("text.first.after")}
                        </p>

                        <p>{t("text.second")}</p>
                        <p>{t("text.third")}</p>
                        <p>{t("text.fourth")}</p>
                    </div>

                    <div className={styles.stats}>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>
                                {t("stats.groupLessons.value")}
                            </span>
                            <span className={styles.statLabel}>
                                {t("stats.groupLessons.label")}
                            </span>
                        </div>

                        <div className={styles.statItem}>
                            <span className={styles.statValue}>
                                {t("stats.individualWork.value")}
                            </span>
                            <span className={styles.statLabel}>
                                {t("stats.individualWork.label")}
                            </span>
                        </div>
                    </div>
                </div>

                <div className={styles.media}>
                    <div className={styles.imageWrap}>
                        <img
                            src="cert.jpg"
                            alt={t("imageAlt")}
                            className={styles.image}
                            referrerPolicy="no-referrer"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;