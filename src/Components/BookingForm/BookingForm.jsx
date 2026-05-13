import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import styles from "./bookingForm.module.css";


const BookingForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const { t } = useTranslation("booking");


    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
    };


    return (
        <section id="booking" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.title}>
                        {t("title.line1")} <br /> <span className={styles.accent}>{t("title.accent")}</span> {t("title.line2")}
                    </h2>
                    <p className={styles.description}>{t("description")}</p>
                </div>


                <div className={styles.card}>
                    {submitted ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className={styles.success}
                        >
                            <h3 className={styles.successTitle}>{t("success.title")}</h3>
                            <p className={styles.successText}>{t("success.text")}</p>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <input
                                type="text"
                                placeholder={t("form.name")}
                                className={styles.input}
                                required
                            />
                            <input
                                type="email"
                                placeholder={t("form.email")}
                                className={styles.input}
                                required
                            />
                            <input
                                type="tel"
                                placeholder={t("form.phone")}
                                className={styles.input}
                                required
                            />
                            <select className={styles.select} defaultValue=""  >
                                <option value="" disabled>
                                    {t("form.directionPlaceholder")}
                                </option>
                                <option>{t("form.options.adults")}</option>
                                <option>{t("form.options.children_6")}</option>
                                <option>{t("form.options.children_9")}</option>
                                <option>{t("form.options.private")}</option>
                            </select>
                            <button
                                type="submit"
                                className={styles.button}
                            >
                                {t("form.submit")}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};


export default BookingForm;