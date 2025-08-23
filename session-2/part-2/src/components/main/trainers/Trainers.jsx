import styles from "./Trainers.module.css";
import TrainerCard from "./TrainerCard";

function Trainers() {
  return (
    <section className={styles.trainers}>
      <h2>Meet the Trainers</h2>
      <TrainerCard
        name="Jessica Power"
        role="Certified Personal Trainer"
        img="https://cdn-icons-png.flaticon.com/512/3541/3541871.png"
      />
      <TrainerCard
        name="Mark Iron"
        role="Strength Coach & Nutritionist"
        img="https://cdn-icons-png.flaticon.com/512/3541/3541871.png"
      />
    </section>
  );
}

export default Trainers;
