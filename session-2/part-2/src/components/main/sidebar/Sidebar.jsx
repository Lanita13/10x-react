import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <h2>About FitLife</h2>
      <p>
        We’re passionate about helping people live healthier lives with expert
        guidance and community support.
      </p>
    </aside>
  );
}

export default Sidebar;
