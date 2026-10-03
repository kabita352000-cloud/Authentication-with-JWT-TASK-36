import { useState } from "react";
import Login from "./Components/Login";
import Register from "./Components/Register";
import "./Components/App.css";
import Protected from "./Components/Protected";

function App() {
  const [protectedData, setProtectedData] = useState("");
  const [message, setMessage] = useState("");

  const getProtectedData = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setMessage("Please login first");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:4000/api/auth/protected",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (response.ok) {
        setProtectedData(
          `Welcome ${data.user.username}. ${data.message}`
        );
        setMessage("");
      } else {
        setProtectedData("");
        setMessage(data.message);
      }
    } catch (error) {
      setMessage("Unable to connect to server");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");

    setProtectedData("");
    setMessage("Logout successful");
  };

  return (
    <div className="app">
      <h1>JWT Authentication</h1>

      <div className="forms">
        <Register />
        <Login />
        <Protected/>
      </div>

      <div className="buttons">
        <button onClick={getProtectedData}>
          Access Protected Route
        </button>

        <button onClick={handleLogout}>
          Logout
        </button>
      </div>

      {message && <p className="message">{message}</p>}

      {protectedData && (
        <div className="protected-box">
          <h2>Protected Route</h2>
          <p>{protectedData}</p>
        </div>
      )}
    </div>
  );
}

export default App;