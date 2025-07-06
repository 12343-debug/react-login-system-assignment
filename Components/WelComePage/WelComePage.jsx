import React from "react";
import './WelComePage.css'

const WelcomePage = ({ setLoggedIn }) => {
  const logout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
  };

  return (
    <div className="container">
      <h2>Welcome! You are logged in</h2>
      <button onClick={logout} className="button">Logout</button>
    </div>
  );
};

export default WelcomePage;
