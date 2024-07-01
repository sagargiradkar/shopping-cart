import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AboutUs from "./pages/AboutUs";

const App = () => {
  return(
    <div>
      <div className="bg-slate-900">
      <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/cart" element={<Cart />}/>
      </Routes>
    </div>
  )
};

export default App;
