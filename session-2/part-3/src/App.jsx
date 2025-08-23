import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Features from "./components/features/Features";
import Blog from "./components/blog/Blog";
import Testimonials from "./components/testimonials/Testimonials";
import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./components/footer/Footer";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Features />
        <Blog />
        <Testimonials />
        <Sidebar />
      </main>
      <Footer />
    </div>
  );
}

export default App;
