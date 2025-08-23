import Testimonial from "./Testimonial";
import styles from "./Testimonials.module.css";

function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <h2>What Developers Say</h2>
      <Testimonial author="Alex Frontend" img="https://cdn-icons-png.flaticon.com/512/3541/3541871.png">
        "DevConnect helped me land my first remote React job!"
      </Testimonial>
      <Testimonial author="Maria JS" img="https://cdn-icons-png.flaticon.com/512/3541/3541871.png">
        "The tutorials and challenges here are better than most courses I've paid for."
      </Testimonial>
    </section>
  );
}

export default Testimonials;
