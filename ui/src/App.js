import { Navbar } from "./components"
import { Home, Login, Register, Profile, Write } from "./pages";
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
        <Route path="/profile" element={user ? <Profile /> : <Login />} />
      </Routes>
    </Router>
  );
}

export default App;
