import styles from "./LegalNotice.module.css";
import { useTranslation } from "react-i18next";

const LegalNotice = () => {
    const { t } = useTranslation("legal");

    const liabilityItems = t("sections.liability.items", { returnObjects: true });
    const liabilityList = Array.isArray(liabilityItems) ? liabilityItems : [];

    console.log("title:", t("title"));
    console.log("liabilityItems:", liabilityItems, Array.isArray(liabilityItems));

    return (
        <main className={styles.page}>
            <section className={styles.wrapper}>
                <div className={styles.container}>
                    <h1 className={styles.title}>{t("title")}</h1>

                    <div className={styles.content}>
                        <section className={styles.block}>
                            <h2 className={styles.heading}>{t("sections.identification.title")}</h2>
                            <p className={styles.text}>{t("sections.identification.intro")}</p>

                            <div className={styles.meta}>
                                <p>
                                    <strong>{t("sections.identification.meta.ownerLabel")}</strong>{" "}
                                    {t("sections.identification.meta.ownerValue")}
                                </p>
                                <p>
                                    <strong>{t("sections.identification.meta.idLabel")}</strong>{" "}
                                    {t("sections.identification.meta.idValue")}
                                </p>
                                <p>
                                    <strong>{t("sections.identification.meta.addressLabel")}</strong>{" "}
                                    {t("sections.identification.meta.addressValue")}
                                </p>
                                <p>
                                    <strong>{t("sections.identification.meta.emailLabel")}</strong>{" "}
                                    <a href={`mailto:${t("sections.identification.meta.emailValue")}`}>
                                        {t("sections.identification.meta.emailValue")}
                                    </a>
                                </p>
                                <p>
                                    <strong>{t("sections.identification.meta.whatsappLabel")}</strong>{" "}
                                    {t("sections.identification.meta.whatsappValue")}
                                </p>
                                <p>
                                    <strong>{t("sections.identification.meta.telegramLabel")}</strong>{" "}
                                    {t("sections.identification.meta.telegramValue")}
                                </p>
                            </div>
                        </section>

                        <section className={styles.block}>
                            <h2 className={styles.heading}>{t("sections.purpose.title")}</h2>
                            <p className={styles.text}>{t("sections.purpose.text")}</p>
                        </section>

                        <section className={styles.block}>
                            <h2 className={styles.heading}>{t("sections.termsOfUse.title")}</h2>
                            <p className={styles.text}>{t("sections.termsOfUse.text1")}</p>
                            <p className={styles.text}>{t("sections.termsOfUse.text2")}</p>
                        </section>

                        <section className={styles.block}>
                            <h2 className={styles.heading}>{t("sections.intellectualProperty.title")}</h2>
                            <p className={styles.text}>{t("sections.intellectualProperty.text")}</p>
                        </section>

                        <section className={styles.block}>
                            <h2 className={styles.heading}>{t("sections.liability.title")}</h2>
                            <p className={styles.text}>{t("sections.liability.intro")}</p>
                            <ul className={styles.list}>
                                {liabilityList.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </section>

                        <section className={styles.block}>
                            <h2 className={styles.heading}>{t("sections.links.title")}</h2>
                            <p className={styles.text}>{t("sections.links.text")}</p>
                        </section>

                        <section className={styles.block}>
                            <h2 className={styles.heading}>{t("sections.dataProtection.title")}</h2>
                            <p className={styles.text}>{t("sections.dataProtection.text")}</p>
                        </section>

                        <section className={styles.block}>
                            <h2 className={styles.heading}>{t("sections.modifications.title")}</h2>
                            <p className={styles.text}>{t("sections.modifications.text")}</p>
                        </section>

                        <section className={styles.block}>
                            <h2 className={styles.heading}>{t("sections.applicableLaw.title")}</h2>
                            <p className={styles.text}>{t("sections.applicableLaw.text")}</p>
                        </section>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default LegalNotice;