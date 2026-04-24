import { useTranslation } from 'react-i18next'
import Logo from '../../assets/logo.png'
import styles from './header.module.css'

function NavItem({ item }) {
    return (
        <li className={styles.headerNavItem}>
            <a href="#" className={styles.headerNavLink}>{item}</a>
        </li>
    );
}

function Header() {
    const { t, i18n } = useTranslation();

    const language = i18n.language;

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    // function getLogo() {
    //     switch (language) {
    //         case 'ru':
    //             return 'Ru';
    //         case 'en':
    //             return 'En';
    //         case 'es':
    //             return 'Es';
    //         default:
    //             return 'En';
    //     }
    // }

    return (
        <div className={styles.headerContainer}>
            <div className={styles.logo}>
                <img src={Logo} alt="logo" />
            </div>

            <div className={styles.headerWrap}>
                <nav className={styles.headerNav}>
                    <ul className={styles.headerNavList}>
                        <NavItem item={t("method")} />
                        <NavItem item={t("about")} />
                        <NavItem item={t("classes")} />
                        <NavItem item={t("contacts")} />
                    </ul>
                </nav>

                <div className={styles.langChange}>
                    <button
                        onClick={() => changeLanguage("ru")}
                        className={`${styles.langChangeBtn} ${language === 'ru' ? styles.langChangeBtnActive : ''}`}
                    >
                        Ru
                    </button>

                    <button
                        onClick={() => changeLanguage("en")}
                        className={`${styles.langChangeBtn} ${language === 'en' ? styles.langChangeBtnActive : ''}`}
                    >
                        En
                    </button>

                    <button
                        onClick={() => changeLanguage("es")}
                        className={`${styles.langChangeBtn} ${language === 'es' ? styles.langChangeBtnActive : ''}`}
                    >
                        Es
                    </button>
                </div>
                {/* <div>{getLogo()}</div> */}
            </div>
        </div>
    );
}

export default Header;