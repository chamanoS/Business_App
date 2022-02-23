import React,{ useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import logo from "../../assets/images/CAxx.png";
import Register from "../../assets/images/regist.png";
import Login from "../../assets/images/login.png";
import Write from "../../assets/images/writer.png";
import Home from '../../assets/images/goldhome.png'
import "./navbar.css";

function Navbar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
          <img className="topImg" src={logo} alt="logo"/>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
            <img className="topImge" src={Home}  alt="logo"/>
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
            <img className="topImge" src={Write} alt="logo"/>
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/profile">
            <img className="topImg" src={PF+user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
              <img className="topImge" src={Login} alt="logo"/>
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
              <img className="topImge" src={Register} alt="logo"/>
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}

export default Navbar;
