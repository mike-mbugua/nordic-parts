import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Home from "./components/homePage/Home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
