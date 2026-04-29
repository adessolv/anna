import Header from "./Components/Header/Header";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Method from "./Components/Method/Method";

function App() {
  return (
    <div className="appShell">
      <main className="container appContent">
        <Header />
        <Hero />
        <Method />
      </main>

      <Footer />
    </div>
  );
}

export default App;
