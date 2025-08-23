import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2025 EduHub. Learn. Grow. Succeed.</p>
      <nav className={styles.nav}>
        <a href="/help">Help</a>
        <a href="/faq">FAQ</a>
      </nav>
    </footer>
  );
}

export default Footer;
