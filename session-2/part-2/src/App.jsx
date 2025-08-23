 import "./App.css";
 import Header from "./components/header/Header";
 import Hero from "./components/main/hero/Hero";
 import Programs from "./components/main/programs/Programs";
 import Trainers from "./components/main/trainers/Trainers";
 import Testimonials from "./components/main/testimonials/Testimonials";
 import Sidebar from "./components/main/sidebar/Sidebar";
 import Footer from "./components/footer/Footer";

 function App() {
  return (
    <div>
      <Header />


      <main>
        <Hero />
        <Programs />
        <Trainers />
        <Testimonials />
        <Sidebar /> 
      </main>
      <Footer />
    </div>
  );
}


export default App;



