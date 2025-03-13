import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css"; 



const Navbar = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (authContext) {
      setUser(authContext.user);
    }
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
      setIsAuthenticated(true);
    }

  }, [authContext]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    if (authContext?.setUser) {
      authContext.setUser(null);
    }

    setUser(null);
    setIsAuthenticated(false);
    navigate("/login");
    
  };

  return (
    <nav className="navbar">
      <h1>Task Manager</h1>
      <div className="navbar-links">
        {isAuthenticated && user ? (
          <div className="navbar-user">
            <span>{user.name}</span>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
