import "./App.css";
import Header from "./header.jsx";
import Nav from "./nav.jsx";
import Aside from "./aside.jsx";
import Section from "./section.jsx";
import Footer from "./footer.jsx";

function App() {
  return (
    <div className="Grid">
      <Header />
      <Nav />
      <Aside />
      <Section />
      <Footer />
    </div>
  );
}

export default App;
