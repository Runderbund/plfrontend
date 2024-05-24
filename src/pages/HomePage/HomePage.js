import React from "react";
import styles from "./HomePage.module.css";
import navBanner from "../../assets/images/Banner.jpg";
import "../../App.css";

/**
 * HomePage is responsible for displaying the home page.
 * @component
 */
const HomePage = () => {
  return (
    <div className="container">
      <h1>Welcome to Bear Steel Powerlifting</h1>
      <div className={styles.logo}></div>
      <img src={navBanner} alt="Banner" />
    </div>
  );
};

export default HomePage;
