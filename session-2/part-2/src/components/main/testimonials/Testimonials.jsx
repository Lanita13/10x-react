import styles from "./Testimonials.module.css";
import TestimonialCard from "./TestimonialCard";

function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <h2>Client Results</h2>
      <TestimonialCard author="Emily Fit">
        "I lost 20 pounds and feel amazing!"
      </TestimonialCard>
      <TestimonialCard author="Jason Lift">
        "The trainers really know how to motivate!"
      </TestimonialCard>
    </section>
  );
}

export default Testimonials;
