import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import styles from "./hero.module.css";

const Hero = () => {
  const { t } = useTranslation("hero");

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.title}>
            {t("title.line1")} <br />
            <span className={styles.accent}>{t("title.accent")}</span> <br />
            {t("title.line3")}
          </h1>

          <p className={styles.text}>{t("description")}</p>

          <div className={styles.actions}>
            <a href="#booking" className={styles.button}>
              {t("cta")}
            </a>
          </div>
        </motion.div>

        <motion.div
          className={styles.media}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.imageWrap}>
            <img
              src="./artistic-movement.jpg"
              alt={t("imageAlt")}
              className={styles.image}
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;