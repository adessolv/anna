import { Link } from "react-router-dom";
import styles from "./footer.module.css";
import { useTranslation } from "react-i18next";


function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm8.5 1.8h-8.5A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95ZM12 7.4A4.6 4.6 0 1 1 7.4 12 4.6 4.6 0 0 1 12 7.4Zm0 1.8A2.8 2.8 0 1 0 14.8 12 2.8 2.8 0 0 0 12 9.2Zm5.1-3.2a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1Z" />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M21.6 4.2a1.5 1.5 0 0 0-1.57-.23L3.3 10.68a1.5 1.5 0 0 0 .14 2.84l4.02 1.28 1.4 4.48a1.5 1.5 0 0 0 2.59.55l2.35-2.73 3.74 2.74a1.5 1.5 0 0 0 2.37-.88l2.3-13.03a1.5 1.5 0 0 0-.61-1.73Zm-3.02 13.02-4.2-3.08a.9.9 0 0 0-1.2.14l-2.21 2.57-.97-3.1 7.53-5.98a.9.9 0 0 0-1.1-1.42l-9.58 6.41-2.86-.91 15.73-6.31-2.14 11.68Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M7.05 2.5A2.55 2.55 0 0 0 4.5 5.05c0 7.98 6.47 14.45 14.45 14.45a2.55 2.55 0 0 0 2.55-2.55v-2.02a1.5 1.5 0 0 0-1.08-1.44l-3.28-.94a1.5 1.5 0 0 0-1.53.4l-1.43 1.47a11.55 11.55 0 0 1-4.6-4.6l1.47-1.43a1.5 1.5 0 0 0 .4-1.53l-.94-3.28A1.5 1.5 0 0 0 9.07 2.5H7.05Zm0 1.8h1.72l.82 2.86-1.73 1.68a1.5 1.5 0 0 0-.3 1.72 13.35 13.35 0 0 0 5.88 5.88 1.5 1.5 0 0 0 1.72-.3l1.68-1.73 2.86.82v1.72a.75.75 0 0 1-.75.75C11.96 18.7 5.3 12.04 5.3 5.05a.75.75 0 0 1 .75-.75Z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M5.75 4h12.5A3.75 3.75 0 0 1 22 7.75v8.5A3.75 3.75 0 0 1 18.25 20H5.75A3.75 3.75 0 0 1 2 16.25v-8.5A3.75 3.75 0 0 1 5.75 4Zm0 1.8A1.95 1.95 0 0 0 3.8 7.75v.19l8.2 5.3 8.2-5.3v-.19a1.95 1.95 0 0 0-1.95-1.95H5.75Zm14.45 4.28-7.71 4.98a.9.9 0 0 1-.98 0L3.8 10.08v6.17a1.95 1.95 0 0 0 1.95 1.95h12.5a1.95 1.95 0 0 0 1.95-1.95v-6.17Z" />
    </svg>
  );
}

function Footer() {
  const { t } = useTranslation("footer");
  <nav aria-label={t("ariaLabel")}></nav>

  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerInner} container`}>
        <div className={styles.addressBlock}>
          <p className={styles.footerTitle}>© 2026 Gentle Movement Space</p>

          <nav className={styles.legalLinks} aria-label={t("footer.ariaLabel")}>
            <Link to="/privacy-policy" className={styles.legalLink}>
              {t("footer.privacyPolicy")}
            </Link>
            <span className={styles.separator}>|</span>
            <Link to="/legal-notice" className={styles.legalLink}>
              {t("footer.legalNotice")}
            </Link>
            <span className={styles.separator}>|</span>
            <Link to="/terms-and-conditions" className={styles.legalLink}>
              {t("footer.termsConditions")}
            </Link>
          </nav>
        </div>

        <div className={styles.socials}>
          <a
            href="tel:+34641189316"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Phone number"
            className={styles.socialLink}
          >
            <PhoneIcon />
          </a>
          <a
            href="https://www.instagram.com/gentle.movement.space?igsh=MXlvd2VwOWcwOWRl"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className={styles.socialLink}
          >
            <InstagramIcon />
          </a>
          <a
            href="https://t.me/AnnaF_B"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className={styles.socialLink}
          >
            <TelegramIcon />
          </a>
          <a
            href="mailto:annaoffbesp@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="E-mail"
            className={styles.socialLink}
          >
            <EmailIcon />
          </a>
        </div>
      </div>
    </footer >
  );
}

export default Footer;