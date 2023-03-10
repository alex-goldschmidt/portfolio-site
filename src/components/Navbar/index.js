import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import Resume from "./Alex Goldschmidt Resume.pdf";

const Navbar = () => {
  return (
    <div className={styles.outline}>
      <div className={styles.content}>
        <h2 className={styles.Header}>Alex Goldschmidt</h2>
        <div className={styles.Links}>
          <Link className={styles.link} to="/">
            Projects
          </Link>
          <a
            className={styles.link}
            target="_blank"
            href={Resume}
            rel="noreferrer"
          >
            Resume
          </a>
          <Link className={styles.link} to="/About">
            About
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
