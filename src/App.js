import logo from "./logo.svg";
import "./App.css";
import ResponsiveAppBar from "./components/header/header";
import Back1 from "./components/back1/back1";
import Back2 from "./components/back2/back2";
import Back3 from "./components/back3/back3";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Back1 />
      <Back2 />
      <Back3 />
      <Footer />
    </div>
  );
}

export default App;
