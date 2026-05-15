import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import styles from "./bookingForm.module.css";

const BookingForm = () => {
    const { t } = useTranslation("booking");

    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        bookingType: "",
        website: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const resetForm = () => {
        setFormData({
            name: "",
            email: "",
            phone: "",
            bookingType: "",
            website: "",
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const response = await fetch("/api/booking", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || "Ошибка отправки");
            }

            setSubmitted(true);
            resetForm();
            setTimeout(() => setSubmitted(false), 5000);
        } catch (err) {
            setError(err.message || "Ошибка при отправке формы");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contacts" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.title}>
                        {t("title.line1")} <br />
                        <span className={styles.accent}>{t("title.accent")}</span> {t("title.line2")}
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
                                name="name"
                                placeholder={t("form.name")}
                                className={styles.input}
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder={t("form.email")}
                                className={styles.input}
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />

                            <input
                                type="tel"
                                name="phone"
                                placeholder={t("form.phone")}
                                className={styles.input}
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />

                            <select
                                name="bookingType"
                                className={styles.select}
                                value={formData.bookingType}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled>
                                    {t("form.directionPlaceholder")}
                                </option>
                                <option value={t("form.options.adults")}>
                                    {t("form.options.adults")}
                                </option>
                                <option value={t("form.options.children_6")}>
                                    {t("form.options.children_6")}
                                </option>
                                <option value={t("form.options.children_9")}>
                                    {t("form.options.children_9")}
                                </option>
                                <option value={t("form.options.private")}>
                                    {t("form.options.private")}
                                </option>
                            </select>

                            <input
                                type="text"
                                name="website"
                                value={formData.website}
                                onChange={handleChange}
                                autoComplete="off"
                                tabIndex="-1"
                                style={{ display: "none" }}
                            />

                            {error ? <p className={styles.error}>{error}</p> : null}

                            <button
                                type="submit"
                                className={styles.button}
                                disabled={loading}
                            >
                                {loading ? "Sending..." : t("form.submit")}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default BookingForm;