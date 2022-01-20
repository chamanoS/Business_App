import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profiles from "./pages/profiles/Profile";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user} = useContext(Context)
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={ <Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Login />} />
        <Route path="/profile" element={user ? <Profiles /> : <Login />} />
      </Routes>
    </Router>
  );
}

export default App;
