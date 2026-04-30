import styles from "./lessons.module.css";
import { useTranslation } from "react-i18next";

const Lessons = () => {
    const { t } = useTranslation("classes");
    const principles = t("principles", { returnObjects: true });

    return (
        <section id="classes" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.title}>{t("title")}</h2>

                    <p className={styles.intro}>{t("intro")}</p>

                    <div className={styles.principles}>
                        <h3 className={styles.principlesTitle}>{t("principlesTitle")}</h3>

                        <div className={styles.principlesList}>
                            {principles.map((item, index) => (
                                <article key={index} className={styles.principleCard}>
                                    <h4 className={styles.cardTitle}>{item.title}</h4>
                                    <p className={styles.cardText}>{item.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={styles.media}>
                    <img
                        src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/a435070b1231e900e09be073c2ee4af9a01d5f40.jpg"
                        alt={t("imageAlt")}
                        className={styles.image}
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
};

export default Lessons;