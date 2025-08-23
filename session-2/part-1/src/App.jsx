import "./App.css";
import Header from "./header/Header";
import Hero from "./main/hero/Hero";
import Courses from "./main/courses/Courses";
import Instructors from "./main/instructors/instructors";
import Testimonials from "./main/testimonials/Testimonials";
import Sidebar from "./main/sidebar/Sidebar";
import Footer from "./footer/footer";





function App() {
  return (
    <div>
     <Header />
     
     
      <main>
        <Hero 
        title = "Learn Anything" 
        subtitle= " Anytime  Access hundreds of expert-led courses for all skill levels."
        buttoText= "Browse Courses "
        />
        
        <Courses>
          <Courses.Course
            title="Web Development Bootcamp"
            description="HTML, CSS, JavaScript, and React from scratch."
          />
          <Courses.Course
            title="Python for Data Science"
            description="Learn NumPy, Pandas, and build data projects."
          />
          <Courses.Course
            title="UI/UX Design Mastery"
            description="Design thinking, wireframes, Figma & prototypes."
          />
        </Courses>
     

 
       <Instructors>
          <Instructors.Instructor
            name="Jane Mentor"
            role="Frontend Expert"
            img="https://cdn-icons-png.flaticon.com/512/3541/3541871.png"
          />
          <Instructors.Instructor
            name="Tom Teach"
            role="Data Scientist"
            img="https://cdn-icons-png.flaticon.com/512/3541/3541871.png"
          />
        </Instructors>

     


         <Testimonials>
          <Testimonials.Testimonial
            text="This platform changed my career!"
            author="Linda Code"
          />
          <Testimonials.Testimonial
            text="The instructors are top-notch!"
            author="Ravi Learns"
          />
        </Testimonials>

        <Sidebar />
      </main>

      <Footer />
    </div>
  );
}


export default App;



