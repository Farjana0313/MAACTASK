import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import 'swiper/css';
import Home from "./pages/frontend/Home";
import Login from "./pages/frontend/Login";
import Register from "./pages/frontend/Register";
import RegionListOne from "./pages/dashboard/RegionListOne";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<RegionListOne />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
