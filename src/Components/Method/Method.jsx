import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import styles from "./method.module.css";

const Method = () => {
  const { t } = useTranslation("method");
  const groups = t("groups.items", { returnObjects: true });
  const reviews = t("reviews", { returnObjects: true });

  return (
    <section id="method" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>{t("title")}</h2>

          <div className={styles.textBlock}>
            <p>{t("text.first")}</p>
            <p>{t("text.second")}</p>
          </div>

          <div className={styles.reviews}>
            <h3 className={styles.reviewsLabel}>{t("reviewsLabel")}</h3>

            <div className={styles.reviewsList}>
              {reviews.map((item, index) => (
                <motion.article
                  key={`${item.name}-${index}`}
                  className={styles.reviewCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <div className={styles.reviewMeta}>
                    <span className={styles.reviewName}>{item.name}</span>
                    <span className={styles.reviewAge}>{item.age}</span>
                  </div>
                  <p className={styles.reviewText}>{item.text}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.sidebar}>
          <div className={styles.groupsCard}>
            <h3 className={styles.groupsTitle}>{t("groups.title")}</h3>

            <div className={styles.groupsList}>
              {groups.map((item, index) => (
                <motion.div
                  key={`${item.name}-${index}`}
                  className={styles.groupItem}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                >
                  <div className={styles.groupInfo}>
                    <span className={styles.groupName}>{item.name}</span>
                    <span className={styles.groupDuration}>{item.duration}</span>
                  </div>

                  <div className={styles.groupPrice}>{item.price}</div>
                </motion.div>
              ))}
            </div>

            <a href="#booking" className={styles.groupsButton}>
              {t("groups.button")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Method;
