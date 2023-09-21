import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login/index";
import Home from "./pages/home/index";

export default function MyApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}
