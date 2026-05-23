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
      <path d="M14.05 6a.9.9 0 0 1 .17-1.79 6.95 6.95 0 0 1 5.57 5.57.9.9 0 1 1-1.79.17 5.15 5.15 0 0 0-3.95-3.95ZM14.05 2a.9.9 0 0 1 .2-1.79 10.97 10.97 0 0 1 9.54 9.54.9.9 0 1 1-1.79.2 9.17 9.17 0 0 0-7.95-7.95ZM18.5 22C9.44 22 2 14.56 2 5.5c0-.41.02-.82.05-1.21.03-.46.06-.83.27-1.19.18-.31.46-.57.78-.73.37-.18.78-.18 1.25-.18h3.02c.42 0 .77 0 1.08.12.26.1.5.27.69.49.22.25.34.58.5 1l1.22 3.35c.16.46.29.8.27 1.14a2.5 2.5 0 0 1-.27.94c-.18.31-.49.5-.9.75l-.93.56a13.8 13.8 0 0 0 5.41 5.41l.56-.93c.25-.41.44-.72.75-.9.29-.2.61-.29.94-.31.34-.02.68.11 1.14.27l3.35 1.22c.42.16.75.28 1 .5.22.19.39.43.49.69.12.31.12.66.12 1.08v3.02c0 .47 0 .88-.18 1.25-.16.32-.42.6-.73.78-.36.21-.73.24-1.19.27-.39.03-.8.05-1.21.05Zm-14.67-18c-.02.28-.03.56-.03.84 0 8.07 6.63 14.7 14.7 14.7.28 0 .56-.01.84-.03v-2.71l-3.04-1.1-.76 1.27a.9.9 0 0 1-1.12.37 15.58 15.58 0 0 1-7.76-7.76.9.9 0 0 1 .37-1.12l1.27-.76-1.1-3.04H3.83Z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M4.75 3A3.75 3.75 0 0 0 1 6.75v10.5A3.75 3.75 0 0 0 4.75 21h14.5A3.75 3.75 0 0 0 23 17.25V6.75A3.75 3.75 0 0 0 19.25 3H4.75Zm0 1.8h14.5a1.95 1.95 0 0 1 1.77 1.13L12 12.18 2.98 5.93A1.95 1.95 0 0 1 4.75 4.8Zm-1.95 3.1 8.69 6.02a.9.9 0 0 0 1.02 0l8.69-6.02v9.35a1.95 1.95 0 0 1-1.95 1.95H4.75A1.95 1.95 0 0 1 2.8 17.25V7.9Z" />
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