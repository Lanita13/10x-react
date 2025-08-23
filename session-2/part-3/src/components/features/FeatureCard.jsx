import styles from "./Features.module.css";

function FeatureCard({ title, children }) {
  return (
    <div className={styles.feature}>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}

export default FeatureCard;
