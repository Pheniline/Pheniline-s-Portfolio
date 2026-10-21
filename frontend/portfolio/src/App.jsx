import Home from "./Home";
import About from "./About";
import useReveal from "./useReveal";
import Projects from "./Projects";

function App() {
  useReveal();

  return (
    <main>
      <Home />
      <About />
      <Projects />
    </main>
  );
}
export default App;
