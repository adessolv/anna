import { useTranslation } from "react-i18next";
import Logo from "../../assets/logo.png";
import styles from "./Header.module.css";

function NavItem({ item, href }) {
  return (
    <li className={styles.headerNavItem}>
      <a href={href} className={styles.headerNavLink}>
        {item}
      </a>
    </li>
  );
}

function Header() {
  const { t, i18n } = useTranslation();
  const language = i18n.language;

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <a href="/" className={styles.brand}>
          <div className={styles.logoBox}>
            <img
              src={Logo}
              alt="Gentle Movement Space logo"
              className={styles.logo}
            />
          </div>

          <div className={styles.brandText}>
            <span className={styles.brandTitle}>Gentle Movement Space</span>
          </div>
        </a>

        <div className={styles.headerWrap}>
          <nav className={styles.headerNav} aria-label="Main navigation">
            <ul className={styles.headerNavList}>
              <NavItem item={t("method")} href="#method" />
              <NavItem item={t("about")} href="#about" />
              <NavItem item={t("classes")} href="#classes" />
              <NavItem item={t("contacts")} href="#contacts" />
            </ul>
          </nav>

          <div className={styles.langChange}>
            <button
              onClick={() => changeLanguage("ru")}
              className={`${styles.langChangeBtn} ${language === "ru" ? styles.langChangeBtnActive : ""}`}
              type="button"
            >
              RU
            </button>

            <button
              onClick={() => changeLanguage("en")}
              className={`${styles.langChangeBtn} ${language === "en" ? styles.langChangeBtnActive : ""}`}
              type="button"
            >
              EN
            </button>

            <button
              onClick={() => changeLanguage("es")}
              className={`${styles.langChangeBtn} ${language === "es" ? styles.langChangeBtnActive : ""}`}
              type="button"
            >
              ES
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
