import NavBar from "./components/NavBar";
import "./styles.css";
import "./styles/NavBar.css";
import Home from "./pages/Home";
import Calculator from "./pages/Calculator";
import About from "./pages/About";

export default function App() {
  console.log(window.location)
  let component
  switch (window.location.pathname){
    case "/":
       component = <Home/>
     break 
     case "/calculator":
       component = <Calculator/>
     break 
     case "/about":
       component = <About/>
     break 
  }


  return (
    <div className="App">
      <NavBar />
      {component}
      
    </div>
  );
}
