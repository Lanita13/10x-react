import styles from "./Sidebar.module.css";

function Sidebar({ children }) {
  return (
    <aside className={styles.sidebar}>
      <h2>About EduHub</h2>
      <p>
        EduHub is an online education platform empowering learners globally
        with real-world skills.
      </p>
      {children}
    </aside>
  );
}

export default Sidebar;
