import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Section from "./components/Section";
import { DataProvider } from "./components/Context";
import Login from "./components/section/Login";

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Logiin = (details) => {
    console.log(details);

    if (
      details.email == adminUser.email &&
      details.password == adminUser.password
    ) {
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      console.log("Details do not match");
      setError("ERROR BROOO!");
    }
  };

  const Logout = () => {
    setUser({ name: "", email: "" });
  };
  return (
    <DataProvider>
      <div className="app">
        <Router>
          <Header />
          <Section />
          {/* {user.email != "" ? (
            <div className="welcome">
              <h2>
                Welcome, <span>{user.name}</span>
              </h2>
              <button onClick={Logout}>Logout</button>
            </div>
          ) : (
            <Login Logiin={Logiin} error={error} />
          )} */}
        </Router>
      </div>{" "}
    </DataProvider>
  );
}

export default App;
