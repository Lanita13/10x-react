import styles from "./Testimonials.module.css";

function Testimonial({ img, author, children }) {
  return (
    <div className={styles.testimonial}>
      <img src={img} alt={author} />
      <blockquote>{children}</blockquote>
      <p>- {author}</p>
    </div>
  );
}

export default Testimonial;
