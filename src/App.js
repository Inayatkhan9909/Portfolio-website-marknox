import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import './styles/output.css'

const siteProps = {
  name: "Inayat Ullah Khan",
  title: "Web Designer & Web Developer",
  email: "khan99.inayat@example.com",
  github: "Inayatkhan9909",
  instagram: "khan inayat",
  linkedIn: "in/inayat-ullah-khan-b428a32a3/",
  medium: "",
  devdotTo: "",
  twitter: "",
  youTube: "",
}
const primaryColor = "#4E567E";

function App() {
  return (
    <div className="App">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} />
    </div>
  );
}

export default App;
