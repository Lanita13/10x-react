import styles from "./Hero.module.css";
import Button from "../ui/Button";

function Hero() {
  return (
    <section className={styles.hero}>
      <h2>Welcome to DevConnect</h2>
      <p>The place where developers share, learn, and grow together.</p>
      <Button>Join Now</Button>
    </section>
  );
}

export default Hero;
