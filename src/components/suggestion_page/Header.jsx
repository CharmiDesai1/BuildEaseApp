import React from "react";
import styles from "./SuggestionPage.module.css";
import icon from "./image 28.png";
import icon2 from "./profile.png";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <h1 className={styles.buildEase}>
          <img src={icon} alt="icon" className={styles.logoIcon} /> Build-ease
        </h1>
        <ul className={styles.navLinks}>
        <li><Link to="/developers-landing-page" className={styles.home}>Home</Link></li>
          <li><a href="#" className={styles.suggestions}>Suggestions</a></li>
          <li><Link to="/floor-plan-page" className={styles.floorPlans}>Floor Plans</Link></li>
        </ul>

        <div className={styles.rightIcons}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7d1a2f2635c8c72cb6dc1307682ad41e336541b71244bfce818fbb7e9780d22?apiKey=159365e216d040bfb41dcf7dfa9bbf0b"
            className={styles.img}
            alt="Notification"
          />
          <div className={styles.iconWrapper}>
          <img src={icon2} alt="Profile" className={styles.profileIcon} />
          </div>
        </div>
      </nav>
    </header>
  );
}
