import Header from "../Header/Header";
import styles from "./TermsConditions.module.css";
import { useTranslation } from "react-i18next";

const TermsConditions = () => {
    const { t } = useTranslation("terms");

    const participationItems = t("sections.participation.items", { returnObjects: true });
    const participantResponsibilityItems = t("sections.participantResponsibility.items", { returnObjects: true });

    const participationList = Array.isArray(participationItems) ? participationItems : [];
    const participantResponsibilityList = Array.isArray(participantResponsibilityItems)
        ? participantResponsibilityItems
        : [];

    return (
        <main className={styles.page}>
            <Header />
            <section className={styles.wrapper}>
                <div className={styles.container}>
                    <h1 className={styles.title}>{t("title")}</h1>

                    <div className={styles.content}>
                        <section className={styles.block}>
                            <h2 className={styles.heading}>{t("sections.purpose.title")}</h2>
                            <p className={styles.text}>{t("sections.purpose.text")}</p>
                        </section>

                        <section className={styles.block}>
                            <h2 className={styles.heading}>{t("sections.serviceNature.title")}</h2>
                            <p className={styles.text}>{t("sections.serviceNature.text1")}</p>
                            <p className={styles.text}>{t("sections.serviceNature.text2")}</p>
                        </section>

                        <section className={styles.block}>
                            <h2 className={styles.heading}>{t("sections.participation.title")}</h2>
                            <p className={styles.text}>{t("sections.participation.intro")}</p>
                            <ul className={styles.list}>
                                {participationList.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                            <p className={styles.text}>{t("sections.participation.text")}</p>
                        </section>

                        <section className={styles.block}>
                            <h2 className={styles.heading}>{t("sections.registration.title")}</h2>
                            <p className={styles.text}>{t("sections.registration.text1")}</p>
                            <p className={styles.text}>{t("sections.registration.text2")}</p>
                            <p className={styles.text}>{t("sections.registration.text3")}</p>
                        </section>

                        <section className={styles.block}>
                            <h2 className={styles.heading}>{t("sections.payment.title")}</h2>
                            <p className={styles.text}>{t("sections.payment.text1")}</p>
                            <p className={styles.text}>{t("sections.payment.text2")}</p>
                        </section>

                        <section className={styles.block}>
                            <h2 className={styles.heading}>{t("sections.cancellations.title")}</h2>
                            <p className={styles.text}>{t("sections.cancellations.text1")}</p>
                            <p className={styles.text}>{t("sections.cancellations.text2")}</p>
                            <p className={styles.text}>{t("sections.cancellations.text3")}</p>
                        </section>

                        <section className={styles.block}>
                            <h2 className={styles.heading}>{t("sections.passesValidity.title")}</h2>
                            <p className={styles.text}>{t("sections.passesValidity.text")}</p>
                        </section>

                        <section className={styles.block}>
                            <h2 className={styles.heading}>{t("sections.participantResponsibility.title")}</h2>
                            <p className={styles.text}>{t("sections.participantResponsibility.intro")}</p>
                            <ul className={styles.list}>
                                {participantResponsibilityList.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </section>

                        <section className={styles.block}>
                            <h2 className={styles.heading}>{t("sections.liability.title")}</h2>
                            <p className={styles.text}>{t("sections.liability.text")}</p>
                        </section>

                        <section className={styles.block}>
                            <h2 className={styles.heading}>{t("sections.modifications.title")}</h2>
                            <p className={styles.text}>{t("sections.modifications.text")}</p>
                        </section>

                        <section className={styles.block}>
                            <h2 className={styles.heading}>{t("sections.applicableLaw.title")}</h2>
                            <p className={styles.text}>{t("sections.applicableLaw.text")}</p>
                        </section>

                        <section className={styles.block}>
                            <h2 className={styles.heading}>{t("sections.dataProtection.title")}</h2>
                            <p className={styles.text}>{t("sections.dataProtection.text")}</p>
                        </section>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default TermsConditions;