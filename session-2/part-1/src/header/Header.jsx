import styles from "./Header.module.css";

function Header() {
    return (

        <header className={styles.header}>
            <h1>EduHub</h1>
            <nav className={styles.nav}>
                <a href="/">Courses</a>
                <a href="/instructors">Instructors</a>
                <a href="/pricing">Pricing</a>
                <a href="/contact">Contact</a>
            </nav>
        </header>

    );
}

export default Header;