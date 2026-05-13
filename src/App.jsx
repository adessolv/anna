import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Method from "./Components/Method/Method";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import BookingForm from "./Components/BookingForm/BookingForm";
import Lessons from "./Components/Lessons/Lessons";
import PrivacyPolicy from "./Components/PrivacyPolicy/PrivacyPolicy";
import LegalNotice from "./Components/LegalNotice/LegalNotice";
import TermsConditions from "./Components/TermsConditions/TermsConditions";

function HomePage() {
  return (
    <main className="container appContent">
      <Header />
      <Hero />
      <Method />
      <About />
      <Experience />
      <Lessons />
      <BookingForm />
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="appShell">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/legal-notice" element={<LegalNotice />} />
          <Route path="/terms-and-conditions" element={<TermsConditions />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;