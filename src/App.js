import Navbar from "./Components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import History from "./Components/History";
import DisplayWord from "./Components/DisplayWord";

const  App = () => {
  return (
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/word/:word" element={<DisplayWord />} />
      </Routes>
    </div>
  )
}

export default App;
