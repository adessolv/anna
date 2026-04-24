import Header from "./Components/Header/Header";
import "./App.css";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="appShell">
      <main className="container appContent">
        <Header />
        <h1>Anna</h1>
      </main>
      <Footer />
    </div>
  );
}

export default App;
