"use client";
import { useState } from "react";
import RestaurantLogin from "../_components/restaurantLogin";
import RestaurantSignUp from "../_components/restaurantSignUp";
import RestaurantHeader from "../_components/restaurantHeader";

const Restaurant = () => {
  const [login, setLogin] = useState();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <>
      {" "}
      <RestaurantHeader isDarkMode={isDarkMode} />{" "}
      <div className={`background-image ${isDarkMode ? "dark" : "light"}`}>
        <div className={isDarkMode ? "container dark" : "container light"}>
          {" "}
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
        </div>{" "}
      </div>{" "}
    </>
  );
};
export default Restaurant;
