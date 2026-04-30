import Header from "./Components/Header/Header";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Method from "./Components/Method/Method";
import About from "./Components/About/About";
import BookingForm from "./Components/BookingForm/BookingForm";
import Lessons from "./Components/Lessons/Lessons";

function App() {
  return (
    <div className="appShell">
      <main className="container appContent">
        <Header />
        <Hero />
        <Method />

        <About />
        <Lessons />
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
