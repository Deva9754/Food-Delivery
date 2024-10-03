import { useState } from "react";

const RestaurantLogin = ({ isDarkMode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };
  return (
    <div className="login-container">
      <h3> RestaurantLogin </h3>{" "}
      <form
        onSubmit={handleSubmit}
        className={isDarkMode ? "form dark" : "form light"}
      >
        <div className="formGroup">
          <label htmlFor="email"> Email: </label>{" "}
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="inputField"
          />
        </div>{" "}
        <div className="formGroup">
          <label htmlFor="password"> Password: </label>{" "}
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="inputField"
          />
        </div>{" "}
        <button type="submit" className="submitButton">
          Log In{" "}
        </button>{" "}
      </form>{" "}
    </div>
  );
};

export default RestaurantLogin;
