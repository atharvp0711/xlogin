import React, { useState } from "react";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showLogin, setShowLogin] = useState(true);

  const handleSubmit = () => {
    if (username && password) {
      if (username !== "user" || password !== "password") {
        alert("Invalid username or password");
        setUsername("");
        setPassword("");
      } else {
        setShowLogin(false);
        alert("Welcome, user!");
      }
    } else {
      alert("Please enter both username and password");
    }
  };

  return (
    <div>
      <h1> Login Page </h1>
      {showLogin ? (
        <div>
          <form>
            <div
              className="formInputs"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <div>
                <label for="username"> Username : </label>
                <input
                  type="text"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter Username"
                  required
                  autoFocus
                />
              </div>
              <div>
                <label for="password"> Password : </label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  required
                />
              </div>
            </div>
          </form>
          <button type="submit" onClick={handleSubmit}>
            {" "}
            Submit{" "}
          </button>
        </div>
      ) : (
        <h2> Wrong Address Mate! </h2>
      )}
    </div>
  );
};

export default App;
