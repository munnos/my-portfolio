import Home from "../../pages/home"
import About from "../../pages/about";
import Resume from "../../pages/resume";
import Projects from "../../pages/Projects";
import Contact from "../../pages/contact";


export default function Main({ currentPage }) {
  function renderPage() {
    if (currentPage === "about") {
      return <About />;
    }
    if (currentPage === "portfolio") {
      return <Projects />;
    }
    if (currentPage === "contact") {
      return <Contact />;
    }
    if (currentPage === "resume") {
      return <Resume />;
    }
    return <Home />;
  }
  return <main>{renderPage()}</main>;
}
