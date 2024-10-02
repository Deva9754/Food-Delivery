"use client";
import { useState } from "react";
import RestaurantLogin from "../_components/restaurantLogin";
import RestaurantSignUp from "../_components/restaurantSignUp";

const Restaurant = () => {
  const [login, setlogin] = useState();
  return (
    <div className="Home-container">
      <h1> Restaurants Page </h1>{" "}
      {login ? <RestaurantLogin /> : <RestaurantSignUp />}{" "}
      <button onClick={() => setlogin(!login)} className="Home-toggleButton">
        {" "}
        {login
          ? "Don't have an account? Sign Up"
          : "Already have an account? Sign In"}{" "}
      </button>{" "}
    </div>
  );
};
export default Restaurant;
