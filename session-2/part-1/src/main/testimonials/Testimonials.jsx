import styles from "./Testimonials.module.css";

function Testimonial({ text, author }) {
  return (
    <div className={styles.testimonial}>
      <p>"{text}"</p>
      <p>- {author}</p>
    </div>
  );
}

function Testimonials({ children }) {
  return (
    <section className={styles.testimonials}>
      <h2>What Students Say</h2>
      {children}
    </section>
  );
}

Testimonials.Testimonial = Testimonial;
export default Testimonials;
