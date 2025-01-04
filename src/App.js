import React, { useState } from "react";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showLogin, setShowLogin] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      if (username !== "user" || password !== "password") {
        setErrorMessage("Invalid username or password");
        setUsername("");
        setPassword("");
      } else {
        setShowLogin(false);
      }
    } else {
      alert("Please enter both username and password");
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      {showLogin ? (
        <form onSubmit={handleSubmit}>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          <div
            className="formInputs"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter Username"
                required
                autoFocus
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                required
              />
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <p>Welcome, user!</p>
      )}
    </div>
  );
};

export default App;
