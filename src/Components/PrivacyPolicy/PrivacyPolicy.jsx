import { useTranslation } from "react-i18next";
import styles from "./PrivacyPolicy.module.css";

const PrivacyPolicy = () => {
    const { t } = useTranslation("privacy-policy");

    const getList = (key) => {
        const value = t(key, { returnObjects: true });
        return Array.isArray(value) ? value : [];
    };

    const collectedDataItems = getList("sections.collectedData.items");
    const purposeItems = getList("sections.purpose.items");
    const legalBasisItems = getList("sections.legalBasis.items");
    const userRightsItems = getList("sections.userRights.items");

    return (
        <main className={styles.page}>
            <section className={styles.wrapper}>
                <div className={styles.container}>
                    <h1 className={styles.title}>{t("title")}</h1>

                    <div className={styles.content}>
                        <section className={styles.block}>
                            <h2 className={styles.heading}>
                                {t("sections.controller.title")}
                            </h2>

                            <div className={styles.meta}>
                                <p>
                                    <strong>{t("sections.controller.meta.ownerLabel")}</strong>{" "}
                                    {t("sections.controller.meta.ownerValue")}
                                </p>
                                <p>
                                    <strong>{t("sections.controller.meta.idLabel")}</strong>{" "}
                                    {t("sections.controller.meta.idValue")}
                                </p>
                                <p>
                                    <strong>{t("sections.controller.meta.addressLabel")}</strong>{" "}
                                    {t("sections.controller.meta.addressValue")}
                                </p>
                                <p>
                                    <strong>{t("sections.controller.meta.emailLabel")}</strong>{" "}
                                    <a href={`mailto:${t("sections.controller.meta.emailValue")}`}>
                                        {t("sections.controller.meta.emailValue")}
                                    </a>
                                </p>
                            </div>
                        </section>

                        <section className={styles.block}>
                            <h2 className={styles.heading}>
                                {t("sections.collectedData.title")}
                            </h2>
                            <p className={styles.text}>
                                {t("sections.collectedData.intro")}
                            </p>
                            <ul className={styles.list}>
                                {collectedDataItems.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                            <p className={styles.text}>
                                {t("sections.collectedData.text")}
                            </p>
                        </section>

                        <section className={styles.block}>
                            <h2 className={styles.heading}>{t("sections.purpose.title")}</h2>
                            <p className={styles.text}>{t("sections.purpose.intro")}</p>
                            <ul className={styles.list}>
                                {purposeItems.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </section>

                        <section className={styles.block}>
                            <h2 className={styles.heading}>
                                {t("sections.legalBasis.title")}
                            </h2>
                            <p className={styles.text}>{t("sections.legalBasis.intro")}</p>
                            <ul className={styles.list}>
                                {legalBasisItems.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </section>

                        <section className={styles.block}>
                            <h2 className={styles.heading}>
                                {t("sections.retention.title")}
                            </h2>
                            <p className={styles.text}>{t("sections.retention.text")}</p>
                        </section>

                        <section className={styles.block}>
                            <h2 className={styles.heading}>
                                {t("sections.recipients.title")}
                            </h2>
                            <p className={styles.text}>{t("sections.recipients.text1")}</p>
                            <p className={styles.text}>{t("sections.recipients.text2")}</p>
                        </section>

                        <section className={styles.block}>
                            <h2 className={styles.heading}>
                                {t("sections.userRights.title")}
                            </h2>
                            <p className={styles.text}>{t("sections.userRights.intro")}</p>
                            <ul className={styles.list}>
                                {userRightsItems.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                            <p className={styles.text}>
                                {t("sections.userRights.requestPrefix")}{" "}
                                <a
                                    href={`mailto:${t("sections.userRights.requestEmail")}`}
                                    className={styles.inlineLink}
                                >
                                    {t("sections.userRights.requestEmail")}
                                </a>
                            </p>
                            <p className={styles.text}>{t("sections.userRights.text")}</p>
                        </section>

                        <section className={styles.block}>
                            <h2 className={styles.heading}>
                                {t("sections.requiredData.title")}
                            </h2>
                            <p className={styles.text}>{t("sections.requiredData.text")}</p>
                        </section>

                        <section className={styles.block}>
                            <h2 className={styles.heading}>
                                {t("sections.security.title")}
                            </h2>
                            <p className={styles.text}>{t("sections.security.text")}</p>
                        </section>

                        <section className={styles.block}>
                            <h2 className={styles.heading}>{t("sections.changes.title")}</h2>
                            <p className={styles.text}>{t("sections.changes.text")}</p>
                        </section>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default PrivacyPolicy;