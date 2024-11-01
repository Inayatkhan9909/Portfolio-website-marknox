import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import './styles/output.css'

const siteProps = {
  name:"Inayat Ullah Khan",
  title:"Web Designer & Web Developer",
  email: "khan99.inayat@example.com",
  github:"microsoft",
  instagram: "microsoft",
  linkedIn: "satyanadella",
  medium: "",
  devdotTo:"",
  twitter: "microsoft",
  youTube: "Code",
 }
 const primaryColor = "#4E567E";
  const secondaryColor = "#D2F1E4";
function App() {
  return (
    <div className="App">
    <Header/>
    <Home name={siteProps.name} title={siteProps.title}/>
    <About/>
    <Portfolio/>
    <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor}/>
    </div>
  );
}

export default App;
