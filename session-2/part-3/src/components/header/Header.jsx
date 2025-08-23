import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>DevConnect</h1>
      </div>
      <nav className={styles.nav}>
        <a href="/">Home</a>
        <a href="/features">Features</a>
        <a href="/blog">Blog</a>
        <a href="/about">About</a>
      </nav>
    </header>
  );
}

export default Header;
