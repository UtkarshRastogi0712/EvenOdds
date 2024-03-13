import { Routes, Route } from "react-router-dom"
import './App.css';
// import  Sidebar, { Sidebardata } from "../src/pages/Sidebardata";
import Landing from "./components/Landing/landing";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Routes>
        <Route path="/" element={ <Landing/> } />
     
        
      </Routes>
    </div>
  );
}

export default App;
