const RestaurantHeader = ({ isDarkMode }) => {
  const headerClass = isDarkMode ? "header dark" : "header light";

  return (
    <div className={headerClass}>
      <div className="header-container">
        <div className="header-logo-container">
          <img
            src="https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"
            alt="logo-image"
            className="header-logo"
          />
          <span className="header-logo-name"> Food Delivery </span>{" "}
        </div>{" "}
        <nav className="header-navbar">
          <a href="#" className="header-nav-link">
            {" "}
            Home{" "}
          </a>{" "}
          <a href="#" className="header-nav-link">
            {" "}
            Menu{" "}
          </a>{" "}
          <a href="#" className="header-nav-link">
            {" "}
            About Us{" "}
          </a>{" "}
          <a href="#" className="header-nav-link">
            {" "}
            Contact{" "}
          </a>{" "}
        </nav>{" "}
      </div>{" "}
    </div>
  );
};

export default RestaurantHeader;
