import styles from "./Instructors.module.css";


function Instructor({name, role, img}) {
   return(
    <div className={styles.instructor}>
            <img
              src={img}
              alt={name}
            />
            <h4>{name}</h4>
            <p>{role}</p>
          </div>
   );
}


function Instructors({children}) {
   return(
    <section className={styles.instructors}>
          <h2>Top Instructors</h2>
          {children}
    </section>
   );
}

Instructors.Instructor = Instructor;
export default Instructors;
 

        {/* Instructors */}
        <section className="instructors">
          <h2>Top Instructors</h2>

          <div className="instructor">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3541/3541871.png"
              alt="Instructor 1"
            />
            <h4>Jane Mentor</h4>
            <p>Frontend Expert</p>
          </div>

          <div className="instructor">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3541/3541871.png"
              alt="Instructor 2"
            />
            <h4>Tom Teach</h4>
            <p>Data Scientist</p>
          </div>
        </section>
