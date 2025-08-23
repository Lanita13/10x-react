import styles from "./Header.module.css";

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <h1>FitLife</h1>
            </div>
            <nav className={styles.nav}>
                <a href="/">Home</a>
                <a href="/programs">Programs</a>
                <a href="/trainers">Trainers</a>
                <a href="/contact">Contact</a>
            </nav>
        </header>

    );
}

export default Header;


