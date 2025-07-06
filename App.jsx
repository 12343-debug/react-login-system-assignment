import React, { useState, useEffect } from "react";
import LoginPage from "./components/LoginPage/LoginPage";
import WelcomePage from "./components/WelComePage/WelcomePage";
import './App.css'

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoggedIn(true);
    }
  }, []);

  return (
    <div className="container">
      {loggedIn ? (
        <WelcomePage setLoggedIn={setLoggedIn} />
      ) : (
        <LoginPage setLoggedIn={setLoggedIn} />
      )}
    </div>
  );
}

export default App;

