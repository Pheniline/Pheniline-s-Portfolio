import Home from "./Home";
import About from "./About";
import useReveal from "./useReveal";
import Projects from "./Projects";
import TechStack from "./Technological stack";

function App() {
  useReveal();

  return (
    <main>
      <Home />
      <About />
      <Projects />
      <TechStack />
    </main>
  );
}
export default App;
