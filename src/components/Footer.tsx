import styles from "./Footer.module.css";

function Footer() {
    return <footer className={styles.footer}>
        <p className={styles.copy}>
            <small>&copy; {new Date().getFullYear()} EverCindy. All rights reserved.</small>
        </p>
    </footer>
}

export default Footer;