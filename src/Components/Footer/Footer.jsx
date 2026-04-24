import styles from "./footer.module.css";

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

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerInner} container`}>
        <div className={styles.addressBlock}>
          <p className={styles.footerTitle}>Gentle Movement Space</p>
          <address className={styles.address}>Oviedo, Spain</address>
        </div>

        <div className={styles.socials}>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className={styles.socialLink}
          >
            <InstagramIcon />
          </a>
          <a
            href="https://t.me"
            target="_blank"
            rel="noreferrer"
            aria-label="Telegram"
            className={styles.socialLink}
          >
            <TelegramIcon />
          </a>
        </div>
      </div>

      <p className={styles.copyright}>
        © {new Date().getFullYear()} Gentle Movement Space. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
