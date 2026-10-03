import { useState } from "react";

const Protected = () => {
  const [message, setMessage] = useState("");

  const accessProtectedRoute = async () => {
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
        setMessage(data.message);
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      console.log(error);
      setMessage("Unable to connect to server");
    }
  };

  return (
    <div className="form-container">
      <h2>Protected Page</h2>

      <button onClick={accessProtectedRoute}>
        Access Protected Route
      </button>

      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Protected;
