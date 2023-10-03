import Navbar from "./Components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import History from "./Components/History";

const  App = () => {
  return (
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </div>
  )
}

export default App;
