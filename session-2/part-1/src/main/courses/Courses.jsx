import styles from "./Courses.module.css"


function Course({ title, description }) {
  return (
    <div className={styles.course}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}



function Courses({ children }) {
  return (
    <section className={styles.courses}>
      <h2>Popular Courses</h2>
      {children}
    </section>
  );
}

Courses.Course = Course;
export default Courses;




