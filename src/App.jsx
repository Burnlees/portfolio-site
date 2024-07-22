import { Projects } from "./components/Projects";
import { Hero } from "./components/Hero";
import { NavBar } from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Contact } from "./components/Contact";
import { BlogList } from "./components/BlogList";
import { BlogPost } from "./components/BlogPost";

function App() {
  return (
    <div
      className="overflow-x-hidden text-primary-100 antialiased selection:bg-primary-600
    selection:text-primary-900"
    >
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(300,300,300,0.1),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto px-8">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Projects />
              </>
            }
          ></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/blog" element={<BlogList />}></Route>
          <Route path="/blog/:id" element={<BlogPost />}></Route>
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
