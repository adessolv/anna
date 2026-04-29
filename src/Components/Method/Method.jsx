import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import styles from "./method.module.css";

const Method = () => {
  const { t } = useTranslation("method");

  const reviews = t("reviews", { returnObjects: true });
  const schedule = t("schedule.items", { returnObjects: true });

  return (
    <section id="method" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.left}>
            <h2 className={styles.title}>{t("title")}</h2>

            <div className={styles.textBlock}>
              <p>{t("text.first")}</p>
              <p>{t("text.second")}</p>
            </div>

            <div className={styles.reviewsGrid}>
              {reviews.map((r, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={styles.reviewCard}
                >
                  <div className={styles.reviewHead}>
                    <h3 className={styles.reviewLabel}>{t("reviewsLabel")}</h3>
                    <div className={styles.reviewAuthor}>
                      {r.name}, {r.age}
                    </div>
                  </div>

                  <p className={styles.reviewText}>«{r.text}»</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.scheduleCard} id="schedule">
              <h3 className={styles.scheduleTitle}>{t("schedule.title")}</h3>

              <div className={styles.scheduleList}>
                {schedule.map((item, i) => (
                  <div key={i} className={styles.scheduleItem}>
                    <div className={styles.scheduleInfo}>
                      <span className={styles.scheduleName}>{item.name}</span>
                      <span className={styles.scheduleTime}>
                        {item.schedule}
                      </span>
                    </div>
                    <span className={styles.schedulePrice}>{item.price}</span>
                  </div>
                ))}
              </div>

              <a href="#booking" className={styles.scheduleButton}>
                {t("schedule.button")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Method;
