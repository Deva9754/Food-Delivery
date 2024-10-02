import { useState } from "react";

const RestaurantLogin = () => {
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
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email"> Email: </label>{" "}
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input-field"
          />
        </div>{" "}
        <div className="form-group">
          <label htmlFor="password"> Password: </label>{" "}
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input-field"
          />
        </div>{" "}
        <button type="submit" className="submit-button">
          Login{" "}
        </button>{" "}
      </form>{" "}
    </div>
  );
};

export default RestaurantLogin;
