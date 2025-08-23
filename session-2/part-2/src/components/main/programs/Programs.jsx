import styles from "./Programs.module.css";
import ProgramCard from "./ProgramCard";

function Programs() {
  return (
    <section className={styles.programs}>
      <h2>Our Programs</h2>
      <ProgramCard title="HIIT Burn">
        High-intensity workouts to torch fat fast.
      </ProgramCard>
      <ProgramCard title="Strength Training">
        Build lean muscle with progressive workouts.
      </ProgramCard>
      <ProgramCard title="Yoga & Flexibility">
        Improve flexibility and reduce stress.
      </ProgramCard>
    </section>
  );
}

export default Programs;
