import Home from "./Home";
import About from "./About";
import useReveal from "./useReveal";

function App() {
  useReveal();

  return (
    <main>
      <Home />
      <About />
    </main>
  );
}
export default App;
