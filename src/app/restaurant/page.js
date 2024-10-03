"use client";
import { useState } from "react";
import RestaurantLogin from "../_components/restaurantLogin";
import RestaurantSignUp from "../_components/restaurantSignUp";

const Restaurant = () => {
  const [login, setLogin] = useState();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className={isDarkMode ? "container dark" : "container light"}>
      <h1> Restaurants Page </h1>{" "}
      {login ? <RestaurantLogin /> : <RestaurantSignUp />}{" "}
      <button onClick={() => setLogin(!login)} className="toggleButton">
        {" "}
        {login
          ? "Don't have an account? Sign Up"
          : "Already have an account? Sign In"}{" "}
      </button>{" "}
      <button onClick={toggleTheme} className="themeToggleButton">
        {" "}
        {isDarkMode ? "🌙" : "🌞"}{" "}
      </button>{" "}
    </div>
  );
};
export default Restaurant;
