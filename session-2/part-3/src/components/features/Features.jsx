import FeatureCard from "./FeatureCard";
import styles from "./Features.module.css";

function Features() {
  return (
    <section className={styles.features}>
      <h2>Why Choose Us?</h2>
      <FeatureCard title="Community Driven">
        Get support, share tips, and build together with thousands of developers.
      </FeatureCard>
      <FeatureCard title="Learning Resources">
        Access curated tutorials, challenges, and projects to boost your skills.
      </FeatureCard>
      <FeatureCard title="Job Board">
        Explore developer jobs and freelance gigs tailored to your stack.
      </FeatureCard>
    </section>
  );
}

export default Features;
